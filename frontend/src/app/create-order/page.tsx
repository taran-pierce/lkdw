'use client'

// import { useState, useEffect } from 'react';
import { MenuStateProvider } from "../../utils/useMenu";
import { useUser } from "../../components/User";
import SectionHeader from '../../components/SectionHeader';
import LoadingSpinner from '../../components/LoadingSpinner';
import CreateOrder from '../../components/CreateOrder';

export default function Page() {
  // const [sentOrder, setSentOrder] = useState(false);
  const user = useUser(); 

  // useEffect(() => {
  //   setSentOrder(true);
  // }, [user]);

  if (!user) {
    return <LoadingSpinner />
  }

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text={`Order`} subText={`${user?.name}, thank you for your order! It will be shipped as soon as possible!`} />
        {user && (
          <CreateOrder user={user} />
        )}
      </main>
    </MenuStateProvider>
  );
}
