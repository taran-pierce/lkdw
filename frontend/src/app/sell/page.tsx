'use client'

import { MenuStateProvider } from "@/utils/useMenu";
import SectionHeader from '@/components/SectionHeader';
import CreateProduct from '@/components/CreateProduct';

export default function Sell() {
  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text="Add Product" subText="Create your product here. Just set the title, description, price and then hit create!" />
        <CreateProduct />
      </main>
    </MenuStateProvider>
  );
}
