import formatMoney from '@/utils/formatMoney';
import formatDate from '@/utils/formatDate';

import styles from './order.module.scss';

export default function Order({
  data,
}: any) {
  if (!data) {
    return <p>Error, no data found...</p>
  }

  const {
    id,
    charge,
    total,
    items,
    date,
  } = data;

  return (
    <div className={styles.orderWrapper}>
      <h4 className={styles.date}>Order Date: {formatDate(date)}</h4>
      <h4>ID: {id}</h4>
      {items.map((item:any) => (
        <div
          key={item.id}
          className={styles.itemWrapper}
        >
          <h4>{item.product.title} <small>x {item.quantity}</small></h4>
          <h4 className={styles.total}>{formatMoney(item.product.price)}</h4>
        </div>
      ))}
      <div className={styles.totalWrapper}>
        <h4>Total</h4>
        <h4 className={styles.total}>{formatMoney(total)}</h4>
      </div>
      <div className={styles.totalWrapper}>
        <h4>Amount charged</h4>
        <h4 className={styles.total}>{formatMoney(charge)}</h4>
      </div>
    </div>
  );
}