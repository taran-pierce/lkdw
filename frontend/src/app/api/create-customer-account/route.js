import { NextResponse } from 'next/server';
// import { calculateCartTotals } from '@/utils/calculateCartTotal';
const stripe = require('stripe')('sk_test_51ObRbiBl2y7GPat6A4wzJiqyi9qdTDAFQnX6rKAIF1gVtH1HyQgN36Q2Fw2zqrnmPJftlPRsZkuKt4fI3F0WKrSk00B0kAplE0');

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    
    const customer = await stripe.customers.create({
      name: body.name,
      email: body.email,
    });

    return NextResponse.json({
      message: 'customer created',
      id: customer?.id,
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
