import { MenuStateProvider } from "@/utils/useMenu";
import SignIn from "@/components/SignIn";

export default function SignInPage() {
  return (
    <MenuStateProvider>
      <main>
        <h1>Sign in to place orders</h1>
        <p>If you dont have an account already, you can create one here!</p>
        <SignIn />
      </main>
    </MenuStateProvider>
  )
}
