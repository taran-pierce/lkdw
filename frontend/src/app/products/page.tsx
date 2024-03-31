"use client"

import { useQuery } from "@apollo/client";
import { MenuStateProvider } from "../../utils/useMenu";

import ProductsDisplay from "../../components/ProductsDisplay";
import LoadingSpinner from "../../components/LoadingSpinner";
import SectionHeader from "../../components/SectionHeader";

import GET_PRODUCTS from "../../gql/getProducts.gql";

export default function Products() {
  const {
    data,
    loading,
    error,
  } = useQuery(GET_PRODUCTS);

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text="Welcome to LKDW!" subText="There are a variety of high quality items to look through and purchase, please take a look around." />
        {loading ? <LoadingSpinner /> : <ProductsDisplay data={data?.products} />}
      </main>
    </MenuStateProvider>
  );
}
