import formatMoney from '@/utils/formatMoney';

import styles from './productsDisplay.module.scss';

export default function ProductsDisplay({
  data,
}: {
  data: Array<any>,
}) {
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
              <button type="button">Edit</button>
              <button type="button">Add</button>
              <button type="button">Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
