import formatMoney from '@/utils/formatMoney';

import styles from './productsDisplay.module.scss';

export default function ProductsDisplay({
  data,
}: {
  data: Array<any>,
}) {
  return (
    <div className={styles.productWrapper}>
      {data.map((product) => {
        const {
          title,
          shortDescription,
          tags,
          id,
          price,
        } = product;

        return (
          <div className={styles.product} key={id}>
            {/* TODO need to be able to upload actual image of course */}
            <img src="http://placekitten.com/440/200" alt="asdf" />
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
