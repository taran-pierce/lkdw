import styles from './productsDisplay.module.scss';

export default function ProductsDisplay() {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.product}>
        <img src="http://placekitten.com/200/300" alt="asdf" />
        <p>Some product</p>
        <p>description</p>
        <p>$10.00</p>
      </div>
      <div className={styles.product}>
        <img src="http://placekitten.com/200/300" alt="asdf" />
        <p>Some product</p>
        <p>description</p>
        <p>$10.00</p>
      </div>
      <div className={styles.product}>
        <img src="http://placekitten.com/g/200/300" alt="asdf" />
        <p>Some product</p>
        <p>description</p>
        <p>$10.00</p>
      </div>
    </div>
  );
}
