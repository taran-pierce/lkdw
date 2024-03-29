import { NextResponse } from 'next/server';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
