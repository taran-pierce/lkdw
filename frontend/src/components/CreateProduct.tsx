'use client'

import { useState } from 'react';
import useForm from '../utils/useForm';
import { useMutation } from '@apollo/client';

import styles from './createProduct.module.scss';

import CREATE_PRODUCT from '../gql/createProduct.gql';
import GET_PRODUCTS from '../gql/getProducts.gql';

export default function CreateProduct() {
  const [status, setStatus] = useState(false);

  // set up form data
  const { inputs, handleChange, resetForm } = useForm({
    title: '',
    shortDescription: '',
    price: 0,
    // image: '',
  });

  console.log({
    inputs,
  });

  // useMutation returns the signin function and the response data object
  const [createProduct, { loading, data, error }] = useMutation(CREATE_PRODUCT, {
    variables: {
      data: {
        ...inputs
      },
    },
    // refetch the current user since they are logged in now
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const res = await createProduct();

      resetForm();

      setStatus(true);

    } catch (error) {
      console.log({
        error,
      });
    }
  }

  return (
    <div className={styles.formWrapper}>
      {status && (
        <p className={styles.sucessMessage}>Product has been created. It can be viewed on the Products page now.</p>
      )}
      <form method="POST" onSubmit={(e) => handleSubmit(e)} className={styles.form} encType='multipart/form-data, text/plain'>
        <fieldset disabled={loading} className={styles.fieldset}>
          <label htmlFor="title" className={styles.label}>Title
            <input
              name="title"
              type="text"
              id="title"
              value={inputs.title}
              onChange={handleChange}
              required
            />
          </label>
          {/* <label htmlFor="image" className={styles.label}>Image
            <input
              name="image"
              type="file"
              id="image"
              onChange={handleChange}
            />
          </label> */}
          <label htmlFor="shortDescription" className={styles.label}>Description
            <input
              name="shortDescription"
              type="text"
              id="shortDescription"
              value={inputs.shortDescription}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="price" className={styles.label}>Price
            <input
              name="price"
              type="number"
              id="shortDescription"
              value={inputs.price}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={styles.button}>Create</button>
        </fieldset>
      </form>
    </div>
  );
}