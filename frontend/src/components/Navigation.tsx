'use client'

import Link from 'next/link';
import { useMenu } from '../utils/useMenu';

import styles from './navigation.module.scss';

export default function Navigation() {
  function handleClick() {
    toggleMenu();
  }

  function handleCartClick() {
    console.log('oh hai!');

    openCart();
  }

  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openCart,
  }: any = useMenu();

  return (
    <nav className={styles.navigation}>
      <button
        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
        type="submit"
        onClick={handleClick}
      >Menu
        <img
          className={`${isMenuOpen ? styles.open : ''}`}
          src="/cart-icon.png"
          alt="Cart Image"
        />
      </button>
      <ul className={isMenuOpen ? styles.active : ''}>
        <li>
          <Link href="/products" onClick={() => closeMenu()}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/signin" onClick={() => closeMenu()}>
            Sign In
          </Link>
        </li>
        <li>
        <Link href="/sell" onClick={() => closeMenu()}>
          Sell
          </Link>
        </li>
        <li>
          <Link href="/account" onClick={() => closeMenu()}>
            Account
          </Link>
        </li>
        <li>
          <button
            type="button"
            className={styles.cartButton}
            onClick={handleCartClick}
          >
            <img src="/cart-icon.png" alt="Cart Image" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
