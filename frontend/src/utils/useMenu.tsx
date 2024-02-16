'use client'

import {
  useState,
  useContext,
  createContext,
} from 'react';

const LocalStateContext = createContext({});
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }: any) {
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

  return (
    <LocalStateProvider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        closeMenu,
        openMenu,
        toggleMenu,
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
