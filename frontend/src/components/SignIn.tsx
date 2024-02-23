'use client'

import { useState } from 'react';
import Link from 'next/link';
import useForm from '../utils/useForm';
import { useMutation } from '@apollo/client';
import { useUser } from './User';

import styles from '../styles/form.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import SIGNIN_USER from '../gql/signinUser.gql';

export default function SignIn() {
  const [hasError, setHasError] = useState(undefined);

  // set up form data
  const { inputs, handleChange, resetForm } = useForm({
    title: 'test@email.com',
    password: '',
  });

  // useMutation returns the signin function and the response data object
  const [signin, { loading }] = useMutation(SIGNIN_USER, {
    variables: inputs,
    // refetch the current user since they are logged in now
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  const user = useUser();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await signin();

    console.log({
      res,
    });

    const {
      authenticateUserWithPassword,
      authenticatedItem,
    } = res.data;

    if (authenticateUserWithPassword?.__typename === 'UserAuthenticationWithPasswordFailure') {
      setHasError({
        error: true,
        message: authenticateUserWithPassword?.message || 'error!',
      });
    }

    if (authenticateUserWithPassword?.__typename === 'UserAuthenticationWithPasswordSuccess') {
      setHasError({
        error: false,
        message: '',
      });
    }
  }

  return (
    <div className={styles.formWrapper}>
      {hasError && hasError.error && (
        <div className={styles.errorMessage}>
          <p>{hasError?.message}</p>
        </div>
      )}
      {!user && (
        <form
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          className={styles.form}
        >
          <fieldset
            disabled={loading}
            className={styles.fieldset}
          >
            <label
              htmlFor="email"
              className={styles.label}
            >Email
              <input
                name="email"
                type="email"
                id="email"
                placeholder="email@address.com"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="password"
              className={styles.label}
            >Password
              <input
                name="password"
                type="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className={styles.button}
            >Sign In</button>
          </fieldset>
        </form>
      )}
      {user && (
        <>
          <p>Thanks for logging in <strong>{user.name}</strong>!</p>
          <p>Now you can create a cart while you are shopping to keep track of your precious cargo.</p>
          <p>
            <Link
              href="/products"
              className={`button`}
            >
              Products
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
