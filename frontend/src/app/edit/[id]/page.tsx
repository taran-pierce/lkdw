'use client'

import { useRouter } from 'next/navigation';

export default function Page({
  params,
}: {
  params: {
    id: string,
  }
}) {
  const router = useRouter();

  console.log({
    params,
    router,
  });

  if (!params.id) {
    return <p>ID not provided...</p>
  }

  return (
    <>
      <p>Edit product view: {params.id}</p>
      <p>Maybe it has more info or a different layout/UI.</p>
    </>
  );
}
