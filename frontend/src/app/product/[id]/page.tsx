"use client"

import { useRouter } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    id: string,
  }
}) {
  const router = useRouter();

  if (!params.id) {
    return <p>ID not provided...</p>
  }

  return (
    <>
      <p>Actually this is more like the product view: {params.id}</p>
      <p>Maybe it has more info or a different layout/UI.</p>
    </>
  );
}
