import { NextResponse } from 'next/server';
import { calculateCartTotals } from '../../../utils/calculateCartTotal';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateTax = async (items, currency) => {
  // TODO needs to use their actual address
  const taxCalculation = await stripe.tax.calculations.create({
    currency,
    customer_details: {
      address: {
        line1: "920 5th Ave",
        city: "Seattle",
        state: "WA",
        postal_code: "98104",
        country: "US",
      },
      address_source: "shipping",
    },
    line_items: items.map((item) => buildLineItem(item)),
  });

  return taxCalculation;
};

const buildLineItem = (item) => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

// Securely calculate the order amount, including tax
const calculateOrderAmount = (items, taxCalculation) => {
  // Calculate the order total with any exclusive taxes on the server to prevent
  // people from directly manipulating the amount on the client
  const { price } = calculateCartTotals(items);

  let orderAmount = price;

  orderAmount += taxCalculation.tax_amount_exclusive;

  return orderAmount;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      items,
      stripeId,
    } = body;

    const taxCalculation = await calculateTax(items, "usd");
    const amount = await calculateOrderAmount(items, taxCalculation);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        tax_calculation: taxCalculation.id
      },
      customer: stripeId,
    });

    // Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
    const handlePaymentIntentSucceeded = async (paymentIntent) => {
      // Create a Tax Transaction for the successful payment
      stripe.tax.transactions.createFromCalculation({
        calculation: paymentIntent.metadata['tax_calculation'],
        reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
      });
    };

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    }, {
      status: 200,
    })
  } catch (error) {
    console.log({
      error,
    });
    return NextResponse.json({
      error: "It broke!",
      message: error,
    }, {
      status: 500,
    })
  }
}
