import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';

import styles from './signOut.module.scss';

import GET_CURRENT_USER  from '../gql/getCurrentUser.gql';
import SIGN_OUT from '../gql/signout.gql';

export default function SignOut() {
  const [signout, { data, loading, error }] = useMutation(SIGN_OUT, {
    refetchQueries: [{ query: GET_CURRENT_USER }]
  });

  const router = useRouter();

  async function handleClick() {
    // sign user out
    await signout();
    
    // send back to home page
    router.push('/');
  }

  return (
    <div className={styles.signOutWrapper}>
      <p>Billing Information section. Going to need that for the checkout any way for shipping information and tax.</p>
      <p>You can also sign out of your account from here!</p>
      <button
        type="button"
        onClick={handleClick}
        className={styles.signOutButton}
      >Sign Out</button>
    </div>
  );
}
