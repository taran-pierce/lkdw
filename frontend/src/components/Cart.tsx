'use client'

import { useMenu } from '@/utils/useMenu';
import { rubikDoodleShadow } from '@/styles/fonts';

import styles from './cart.module.scss';

export default function Cart() {
  const {
    isCartOpen,
    closeCart,
  }: any = useMenu();

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
        <li className={styles.cartItem}>
          <span className={styles.itemTitle}>Mini Aussie x 1</span>
          <span className={styles.itemPrice}>$10,030</span>
        </li>
      </ul>
      <div className={styles.cartTotals}>
        <span className={styles.label}>Total</span>
        <span className={styles.total}>$10,030</span>
      </div>
    </div>
  );
}
