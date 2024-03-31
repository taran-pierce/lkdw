"use client"

import SectionHeader from "../../components/SectionHeader";
import { useUser } from "../../components/User";
import Orders from "../../components/Orders";
import SignOut from "../../components/SignOut";
import LoadingSpinner from "../../components/LoadingSpinner";


export default function Account() {
  const user = useUser();

  if (!user) {
    return <LoadingSpinner />
  }

  const hasPreviousOrders = user.orders.length > 0;

  return (
      <main>
        <SectionHeader
          text="Account" 
          subText={`${!hasPreviousOrders ? 'There are no previous orders to display, let\'s get out there and get shopping!' : ''}`}
        />
        <SignOut />
      {hasPreviousOrders && (
        <>
          <Orders orders={user.orders} />
        </> 
      )}
    </main>
  );
}
