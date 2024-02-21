'use client'


import {
  useEffect,
  useState,
} from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '@/components/CheckoutForm';

import styles from './payment.module.scss';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Payment({ user }: any) {
  const [clientSecret, setClientSecret] = useState("");

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  const { cart } = user;

  const lineItems = cart.map((cartItem:any) => {
    return {
      id: cartItem.id,
      amount: cartItem.product.price,
      title: cartItem.product.title,
      quantity: cartItem.quantity,
      product: {
        price: cartItem.product.price,
      }
    }
  });

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: lineItems,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div className={styles.paymentWrapper}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
