'use client'

import { useRouter } from 'next/navigation';
import useForm from '../../utils/useForm';
import { useMutation } from '@apollo/client';

import styles from '../../styles/form.module.scss';

import GET_CURRENT_USER from '../../gql/getCurrentUser.gql';
import CREATE_USER from '../../gql/createUser.gql';

export default function CreateAccount() {
  const router = useRouter();

  // set up form data
  // TODO maybe optionally let them do billing information here
  // then detect that later and dont make them enter billing info on CC page
  const { inputs, handleChange, resetForm }: any = useForm({
    name: 'Name',
    email: 'test@email.com',
    password: '',
  });

  // useMutation returns the signin function and the response data object
  // TODO make a funciton to filter the error message to make it better
  const [createUser, { loading, data, error }] = useMutation(CREATE_USER, {
    variables: inputs,
    // refetch the current user since they are logged in now
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    // create users billing account for future payment
    const customerData = await fetch("https://lkdw.vercel.app/api/create-customer-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputs?.name,
        email: inputs?.email,
      }),
    })
      .then((res) => {        
        return res.json()
      });

    // create the user
    const res = await createUser({
      variables: {
        data: {
          ...inputs,
          stripeId: customerData.id,
        },
      }
    });

    if (res?.data?.createUser) {
      router.push('/signin');
    }
  }

  return (
    <div className={styles.formWrapper}>
      {error && error && (
        <div className={styles.errorMessage}>
          <p>{error?.message}</p>
        </div>
      )}
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
            htmlFor="name"
            className={styles.label}
          >Email
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
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
    </div>
  );
}
