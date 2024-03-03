'use client'

import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useMenu } from '../utils/useMenu';
import { rubikDoodleShadow } from '../styles/fonts';
import formatMoney from '../utils/formatMoney';
import { calculateCartTotals } from '../utils/calculateCartTotal';

import { useUser } from './User';

import styles from './cart.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import REMOVE_PRODUCT_FROM_CART from '../gql/removeProductFromCart.gql';

export default function Cart() {
  const {
    isCartOpen,
  }: any = useMenu();

  const [removeProduct, { data, loading, error }] = useMutation(REMOVE_PRODUCT_FROM_CART, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  function removeItemFromCart(e:any, cartItem: any) {
    removeProduct({
      variables: {
        where: { id: cartItem.id }
      }
    });
  }
  
  const user = useUser();

  const { cart = [] } = user || {};

  const { formatted } = calculateCartTotals(cart);

  return (
    <div className={`${styles.cartWrapper} ${isCartOpen ? styles.open : ''}`}>
      <div className={styles.headerWrapper}>
        <p className={`${rubikDoodleShadow.className} ${styles.cartHeading}`}>Shopping Cart</p>
        <button
          type="button"
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
        <span className={styles.total}>{formatted}</span>
      </div>
      <Link
        href="/checkout/"
        className={`button ${styles.checkoutButton} ${cart.length === 0 ? styles.disabled : ''}`}
      >Checkout</Link>
    </div>
  );
}
