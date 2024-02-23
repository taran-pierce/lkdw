'use client'

import { MenuStateProvider } from '@/utils/useMenu';
import SectionHeader from '@/components/SectionHeader';
import { useUser } from '@/components/User';
import Orders from '@/components/Orders';
import SignOut from '@/components/SignOut';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Account() {
  const user = useUser();

  if (!user) {
    return <LoadingSpinner />
  }

  const hasPreviousOrders = user.orders.length > 0;

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader
          text="Account" 
          subText="Page contains all your account related information. You should probably also have a way to log out from here as well..."
        />
        <SignOut />
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
