'use client'

import { MenuStateProvider } from "@/utils/useMenu";
import SectionHeader from "@/components/SectionHeader";
import { useUser } from "@/components/User";
import Orders from '@/components/Orders';

export default function Account() {
  const user = useUser();

  console.log({
    user,
  });

  if (!user) {
    return <p>You must log in first...</p>
  }

  const hasPreviousOrders = user.orders.length > 0;

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text="Account" subText="Page contains all your account related information." />
      </main>
      {!hasPreviousOrders && (
        <>
          <p>You have not made any purchases yet.</p>
        </> 
      )}
      {hasPreviousOrders && (
        <>
          <Orders orders={user.orders} />
        </> 
      )}
    </MenuStateProvider>
  );
}
