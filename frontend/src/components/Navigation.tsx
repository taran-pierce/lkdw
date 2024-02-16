'use client'

import Link from 'next/link';
import { useMenu } from '../utils/useMenu';
import styles from './navigation.module.scss';

export default function Navigation() {
  function handleClick() {
    toggleMenu();
  }

  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  }: any = useMenu();

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.menuToggle}
        type="submit"
        onClick={handleClick}
      >Menu</button>
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
          <Link href="/orders" onClick={() => closeMenu()}>
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}
