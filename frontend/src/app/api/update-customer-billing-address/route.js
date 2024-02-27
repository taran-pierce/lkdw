import { NextResponse } from 'next/server';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      address,
      stripeId,
    } = body;

    const customerAddress = address.value.address;

    if (stripeId) {
      await stripe.customers.update(
        stripeId,
        {
          address: customerAddress
        }
      );
    }

    return NextResponse.json({
      message: 'address updated',
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
