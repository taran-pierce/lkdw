import formatMoney from '@/utils/formatMoney';
import { useMutation } from '@apollo/client';
import { useUser } from './User';

import styles from './productsDisplay.module.scss';

import GET_CURRENT_USER from '../gql/getCurrentUser.gql';
import ADD_PRODUCT_TO_CART from '../gql/addProductToCart.gql';

export default function ProductsDisplay({
  data,
}: {
  data: Array<any>,
}) {
  const [addItem, { data: proudctData, loading, error }] = useMutation(ADD_PRODUCT_TO_CART);

  const user = useUser();

  async function addItemToCart(e: any, product: any) {
    e.preventDefault();

    const res = await addItem({
      variables: {
        productId: product.id,
      },
      refetchQueries: [{ query: GET_CURRENT_USER }]
    });

    // TODO this works, should open the cart or something to show the user it worked
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
        } = product;

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
            <p>Tags: {tags.map((tag: any) => (
                <span key={tag.name}>{tag.name}</span>
              ))}
            </p>
            <div className={styles.buttonWrapper}>
              <fieldset disabled={loading}>
                <button type="button">Edit</button>
                <button type="button" onClick={(e) => addItemToCart(e, product)}>Add</button>
                <button type="button">Delete</button>
              </fieldset>
            </div>
          </div>
        )
      })}
    </div>
  );
}
