'use client'

import { useState } from 'react';
import useForm from '../utils/useForm';
import { useMutation } from '@apollo/client';
import { useUser } from './User';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import SIGNIN_USER from '../gql/signinUser.gql';

export default function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // set up form data
  const { inputs, handleChange, resetForm } = useForm({
    title: 'test@email.com',
    password: 'password',
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

    const { authenticateUserWithPassword } = res.data;

    if (authenticateUserWithPassword.item) {
      console.log('We are good here ', authenticateUserWithPassword.item.name);

      setIsLoggedIn(true);

      // document.cookie=`keystonejs-session=${authenticateUserWithPassword.sessionToken}`
    }

    console.log({
      res,
      authenticateUserWithPassword,
      loading,
    });
  }

  console.log({
    user,
  });

  return (
    <div>
      {!user && (
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email
            <input
              name="email"
              type="email"
              id="email"
              placeholder="email@address.com"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">Password
            <input
              name="password"
              type="password"
              id="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      )}
      {user && (
        <p>Thanks for logging in {user.name}! Get to shopping!</p>
      )}
    </div>
  );
}
