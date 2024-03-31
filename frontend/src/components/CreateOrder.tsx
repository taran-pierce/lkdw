import { useEffect, useState } from "react";
import {
  useRouter,
} from "next/navigation";

import { useMutation } from "@apollo/client";

import CHECKOUT from "../gql/checkout.gql";
// TODO might need to refetch this
import GET_CURRENT_USER from "../gql/getCurrentUser.gql";

export default function CreateOrder({
  user,
}: any) {
  const [sentOrder, setSentOrder] = useState(false);

  const router = useRouter();

  const [checkout, {
    data,
    error,
    loading,
  }] = useMutation(CHECKOUT);

  async function createOrder() {
    console.trace();

    const { cart } = user;

    if (sentOrder) {
      console.log('just return, order already sent');
      return;
    }

    // only create an order if they have a cart with items
    // and we have the succeeded param from stripe
    if (!user) {
      console.log('no user, return', user);
      return;
    }

    if (user.cart.length === 0) {
      console.log('user has no cart items');
      return;
    }

    if (loading) {
      console.log('we are already in a loading state, just return and wait');
      return;
    }

    console.log('Past if for cart and param', {
      loading,
      cart,
    });

    // place the roder and refectch the user
    // it will turn the "cart" into an "order"
    // and empty the cart
    const res = await checkout({
      variables: {
        id: user.id,
      },
      refetchQueries: [{ query: GET_CURRENT_USER}]
    });

    return await res;
  }

  useEffect(() => {
    async function createTheOrder() {
      return await createOrder();
    }

    const res = !sentOrder && createTheOrder().then((res) => {
      console.log({
        res,
      });

      console.log('maybe push to the next page now?');

      setSentOrder(true);

      router.push(`/order/${res?.data?.checkout?.id}`);
    });
  }, []);

  return (
    <div>
      <p>Creating Order...</p>
    </div>
  );
}
