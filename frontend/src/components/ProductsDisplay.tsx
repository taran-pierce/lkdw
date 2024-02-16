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
            <img src="http://placekitten.com/200/300" alt="asdf" />
            <p>{title}</p>
            {shortDescription && (
              <p>{shortDescription}</p>
            )}
            <p>Tags: {tags.map((tag: any) => (
              <span key={tag.name}>{tag.name}</span>
            ))}</p>
            <p>{price}</p>
          </div>
        )
      })}
    </div>
  );
}
