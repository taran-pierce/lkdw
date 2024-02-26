'use client'

import {
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';

import { MenuStateProvider } from "../../../utils/useMenu";
import { useUser } from "../../../components/User";
import SectionHeader from '../../../components/SectionHeader';
import Order from '../../../components/Order';
import LoadingSpinner from '../../../components/LoadingSpinner';

import GET_CURRENT_USER from '../../../gql/getCurrentUser.gql';
import CHECKOUT from '../../../gql/checkout.gql';

export default function Page({
  params,
}: {
  params: {
    id: string,
  }
}) {
  const user = useUser();
  const router = useRouter();

  const [checkout, {
    data: checkoutData,
    error: checkoutError,
    loading: checkoutLoading,
  }] = useMutation(CHECKOUT);

  const {
    id,
  } = params;

  async function createOrder() {
    const { cart } = user;

    // TODO should really just move this to another page
    // that page should have the checkout mutation so this page 
    // wouldnt need the check here to stop it from running 
    if (cart.length === 0) {
      return;
    }

    const res = await checkout({
      variables: {
        id: user.id,
      },
      refetchQueries: [{ query: GET_CURRENT_USER}]
    });

    router.push(`/order/${res?.data?.checkout?.id}`);
  }

  useEffect(() => {
    // dont run it until we have a user
    user && createOrder();
  }, [user]);

  if (!id) {
    return <p>ID not provided...</p>
  }

  if (!user || checkoutLoading) {
    return <LoadingSpinner />
  }

  // grag the current order the users list of orders
  const currentOrder = user.orders.filter((order:any) => order.id === id);

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text={`Order`} subText={`${user?.name}, thank you for your order! It will be shipped as soon as possible! ${currentOrder[0]?.id}`} />
        <Order data={currentOrder[0]} />
      </main>
    </MenuStateProvider>
  );
}
