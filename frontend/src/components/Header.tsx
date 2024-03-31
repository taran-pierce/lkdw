"use client"

import Link from "next/link";

import Navigation from "./Navigation"
import Cart from "./Cart";
import { useMenu } from "../utils/useMenu";
import { rubikDoodleShadow } from "../styles/fonts";

import styles from "./header.module.scss";

export default function Header() {
  const {
    closeMenu,
  }: any = useMenu();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.logo} ${rubikDoodleShadow.className}`}>
            <Link href="/" onClick={() => closeMenu()}>LKDW</Link>
          </h1>
          <Navigation />
        </div>
      </header>
      <Cart />
    </>
  );
}
