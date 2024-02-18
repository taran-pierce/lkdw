'use client'

import {
  useState,
  useContext,
  createContext,
} from 'react';

const LocalStateContext = createContext({});
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }: any) {
  // navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  // shopping cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCart() {
    setIsCartOpen(!isMenuOpen);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function openCart() {
    setIsCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        closeMenu,
        openMenu,
        toggleMenu,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
     {children}
    </LocalStateProvider>
  )
}

function useMenu() {
  return useContext(LocalStateContext);
}

export {
  useMenu,
  MenuStateProvider,
}
