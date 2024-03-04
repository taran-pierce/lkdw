'use client'

import { useEffect, useState } from 'react';
import { MenuStateProvider } from "../../../utils/useMenu";
import { useUser } from "../../../components/User";
import SectionHeader from '../../../components/SectionHeader';
import Order from '../../../components/Order';
import LoadingSpinner from '../../../components/LoadingSpinner';

export default function Page({
  params,
}: {
  params: {
    id: string,
  }
}) {  
  const [recentOrder, setRecentOrder] = useState(null);
  const user = useUser();

  const {
    id,
  } = params;

  useEffect(() => {
    user && setRecentOrder(user.orders);  
  }, [user]);

  if (!id) {
    return <p>ID not provided...</p>
  }

  if (!user || !recentOrder) {
    return <LoadingSpinner />
  }

  console.log({
    recentOrder,
  });

  // grag the current order the users list of orders
  const currentOrder = user.orders.filter((order:any) => order.id === id);

  console.log({
    currentOrder,
  });

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text={`Order`} subText={`${user?.name}, thank you for your order! It will be shipped as soon as possible! ${currentOrder[0]?.id}`} />
        <Order data={currentOrder[0]} />
      </main>
    </MenuStateProvider>
  );
}
