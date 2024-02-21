'use client'

import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';

import { MenuStateProvider } from "@/utils/useMenu";
import { useUser } from "@/components/User";
import SectionHeader from '@/components/SectionHeader';
import Container from '@/components/Container';
import Order from '@/components/Order';
import LoadingSpinner from '@/components/LoadingSpinner';

import GET_ORDER from '../../../gql/getOrder.gql';

export default function Page({
  params,
}: {
  params: {
    id: string,
  }
}) {
  const router = useRouter();
  const user = useUser();

  const {
    data,
    loading,
    error,
  } = useQuery(GET_ORDER, {
    variables: {
      where: {
        id: params.id,
      }
    }
  });

  if (!params.id) {
    return <p>ID not provided...</p>
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text={`Order`} subText={`${user?.name}, order information for your order ${params.id}`} />
        <Order data={data.order} />
      </main>
    </MenuStateProvider>
  );
}
