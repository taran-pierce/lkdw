import { MenuStateProvider } from "../../utils/useMenu";
import SignIn from "../../components/SignIn";
import SectionHeader from "../../components/SectionHeader";

export default function SignInPage() {
  return (
    <MenuStateProvider>
      <main>
        <SectionHeader text="Sign In" subText="To place orders or make a cart, you will need to sign into your account. If you dont have an account already, you can create one here! Don't worry, there is no credit card required to make an account." />
        <SignIn />
      </main>
    </MenuStateProvider>
  )
}
