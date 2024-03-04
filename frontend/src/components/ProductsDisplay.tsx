'use client'

import Link from 'next/link';

import formatMoney from '../utils/formatMoney';
import { useMutation } from '@apollo/client';
import { useUser } from './User';

import styles from './productsDisplay.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import GET_PRODUCTS from '../gql/getProducts.gql';
import ADD_PRODUCT_TO_CART from '../gql/addProductToCart.gql';
import DELETE_PRODUCT from '../gql/deleteProduct.gql';

export default function ProductsDisplay({
  data,
}: {
  data: Array<any>,
}) {
  const [addItem, { data: proudctData, loading, error }] = useMutation(ADD_PRODUCT_TO_CART, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  const [deleteProduct, {
    data: dataForDelete,
    loading: loadingForDelete,
    error: errorForDelete,
  }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const user = useUser();

  async function addItemToCart(product: any) {
    const res = await addItem({
      variables: {
        productId: product.id,
      },
    });
  }

  async function handleDeleteItem(product: any) {
    if (confirm("Are you sure you want to delete this Product?")) {
      deleteProduct({
        variables: {
          where: { id: product.id },
        }
      });
    }
  }

  return (
    <div className={styles.productWrapper}>
      {data?.map((product) => {
        const {
          title,
          shortDescription,
          tags,
          id,
          price,
          image,
          user: productUser,
        } = product;

        // if they "own" the product then they can edit or delete it
        // so they get more buttons
        const ownsProduct = user && productUser.id === user.id;

        return (
          <div className={styles.product} key={id}>
            {image && (
              <img
                src={image.image.url}
                alt={image.altText}
              />
            )}
            <div className={styles.titleWrapper}>
              <h3>{title}</h3>
              <h4>{formatMoney(price)}</h4>
            </div>
            {shortDescription && (
              <p>{shortDescription}</p>
            )}
            <p>Tags: 
              {tags.map((tag: any) => (
                <span
                  key={tag.name}
                  className={styles.tag}
                >{tag.name}</span>
              ))}
            </p>
              <div className={`${styles.buttonWrapper} ${!user ? styles.loggedOut : ''} ${ownsProduct ? styles.owner : ''}`}>
                  <fieldset disabled={loading}>
                    {user && (
                      <>
                        {ownsProduct && (
                          <Link
                            href={`/edit/${product.id}`}
                            className="button"
                          >
                            Edit
                          </Link>
                        )}
                        <button
                          type="button"
                          onClick={() => addItemToCart(product)}
                        >{loading ? 'loading' : 'Add'}</button>
                        {ownsProduct && (
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(product)}
                          >Delete
                          </button>
                        )}
                      </>
                    )}
                    {!user && (
                      <Link
                        href="/signin"
                        className="button"
                      >
                        Sign in to purchase
                      </Link>
                    )}
                  </fieldset>
              </div>
          </div>
        )})
      }
    </div>
  );
}
