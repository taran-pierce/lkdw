"use client"

import SectionHeader from "../../components/SectionHeader";
import { useUser } from "../../components/User";
import CartList from "../../components/CartList";
import Payment from "../../components/Payment";

export default function Checkout() {
  const user = useUser();

  return (
    <main>
      <SectionHeader text="Checkout" subText="Look over your order and make sure everything looks correct before making your purchase. Then enter you credit card information down below." />
      {user && user?.cart.length > 0 && (
        <>
          <CartList cart={user.cart} />
          <Payment user={user} />
        </>
      )}
      {user && user.cart.length === 0 && (
        <p>You have no items in your cart...</p>
      )}
    </main>
  );
}