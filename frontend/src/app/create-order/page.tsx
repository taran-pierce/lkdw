"use client"

import { useUser } from "../../components/User";
import SectionHeader from "../../components/SectionHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import CreateOrder from "../../components/CreateOrder";

export default function Page() {
  const user = useUser(); 

  if (!user) {
    return <LoadingSpinner />
  }

  return (
    <main>
      <SectionHeader text={`Order`} subText={`${user?.name}, thank you for your order! It will be shipped as soon as possible!`} />
      {user && (
        <CreateOrder user={user} />
      )}
    </main>
  );
}
