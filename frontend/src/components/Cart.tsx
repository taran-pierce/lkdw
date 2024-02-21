'use client'

import { useMutation } from '@apollo/client';
import { useMenu } from '@/utils/useMenu';
import { rubikDoodleShadow } from '@/styles/fonts';
import formatMoney from '@/utils/formatMoney';

import { useUser } from './User';

import styles from './cart.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import REMOVE_PRODUCT_FROM_CART from '../gql/removeProductFromCart.gql';

export default function Cart() {
  const {
    isCartOpen,
    closeCart,
  }: any = useMenu();

  const [removeProduct, { data, loading, error }] = useMutation(REMOVE_PRODUCT_FROM_CART, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  function getCartTotal(cart: any) {
    return cart.reduce((total:any, cartItem:any) => {
      // products can be deleted but still in cart
      if (!cartItem.product) {
        return total;
      }
  
      // take the total -> add the quantity * price
      return total + cartItem.quantity * cartItem.product.price;
    }, 0);
  }

  function removeItemFromCart(e, cartItem: any) {
    removeProduct({
      variables: {
        where: { id: cartItem.id }
      }
    });
  }
  
  const user = useUser();

  const { cart = [] } = user || {};

  const total = getCartTotal(cart);

  return (
    <div className={`${styles.cartWrapper} ${isCartOpen ? styles.open : ''}`}>
      <div className={styles.headerWrapper}>
        <p className={`${rubikDoodleShadow.className} ${styles.cartHeading}`}>Shopping Cart</p>
        <button
          type="button"
          onClick={closeCart}
          className={styles.cartClose}
        >Close</button>
      </div>
      <ul className={styles.cartItems}>
        {cart.length >= 1 && cart.map((cartItem:any) => (
          <li className={styles.cartItem} key={cartItem.id}>
            <button
              type="button"
              onClick={(e) => removeItemFromCart(e, cartItem)}
              className={styles.removeButton}
              disabled={loading}
            >
              <img src="/trash-can.png" alt="Remove" />
            </button>
            <span className={styles.itemTitle}>{cartItem.product?.title} x {cartItem.quantity}</span>
            <span className={styles.itemPrice}>{formatMoney(cartItem.product?.price)}</span>
          </li>
        ))}
      </ul>
      <div className={styles.cartTotals}>
        <span className={styles.label}>Total</span>
        <span className={styles.total}>{formatMoney(total)}</span>
      </div>
    </div>
  );
}
