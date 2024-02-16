'use client'

import { useQuery } from '@apollo/client';
import { MenuStateProvider } from "@/utils/useMenu";

import ProductsDisplay from "@/components/ProductsDisplay";

import { rubikDoodleShadow } from "@/styles/fonts";

// import GET_USERS from '../gql/getUsers.gql';
import GET_POSTS from '../gql/getPosts.gql';
// import GET_PRODUCTS from '../gql/getProducts.gql';

export default function Home() {

  const { data, loading, error } = useQuery(GET_POSTS);

  console.log({
    data,
    loading,
    error,
  });

  return (
    <MenuStateProvider>
      <main>
        <h1 className={rubikDoodleShadow.className}>Welcome to LKDW!</h1>
        <p>There are a variety of high quality items to look through and purchase, please take a look around.</p>
        <ProductsDisplay />
      </main>
    </MenuStateProvider>
  );
}
