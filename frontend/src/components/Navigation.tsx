'use client'

import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { useMenu } from '../utils/useMenu';
import getCartCount from '../utils/getCartCount';
import { useUser } from './User';

import styles from './navigation.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';

export default function Navigation() {
  const {
    data,
    loading,
    error,
  } = useQuery(GET_CURRENT_USER); 

  function handleClick() {
    toggleMenu();
  }

  function handleCartClick() {
    openCart();
  }

  const user = useUser();

  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openCart,
  }: any = useMenu();

  const cartCount = user && user.cart && getCartCount(user.cart);

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
        {user?.cart && user.cart.length > 0 && (
          <span className={styles.cartCount}>{cartCount}</span>
        )}
      </button>
      <ul className={isMenuOpen ? styles.active : ''}>
        <li>
          <Link href="/products" onClick={() => closeMenu()}>
            Products
          </Link>
        </li>
        {user && (
          <>
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
          </>
        )}
        <li>
          {!user && (
            <Link href="/signin" onClick={() => closeMenu()}>
              Sign In
            </Link>
          )}
          {user && (
            <button
              type="button"
              className={styles.cartButton}
              onClick={handleCartClick}
            >
              <img src="/cart-icon.png" alt="Cart Image" />
              {user.cart && user.cart.length > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
