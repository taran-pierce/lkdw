'use client'

import { useMenu } from '@/utils/useMenu';
import { rubikDoodleShadow } from '@/styles/fonts';
import formatMoney from '@/utils/formatMoney';

import { useUser } from './User';

import styles from './cart.module.scss';

export default function Cart() {
  const {
    isCartOpen,
    closeCart,
  }: any = useMenu();

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
            <span className={styles.itemTitle}>{cartItem.product.title} x {cartItem.quantity}</span>
            <span className={styles.itemPrice}>{formatMoney(cartItem.product.price)}</span>
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
