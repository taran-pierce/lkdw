import styles from './cartList.module.scss';

import { calculateCartTotals } from '../utils/calculateCartTotal';
import formatMoney from '../utils/formatMoney';

export default function CartList({
  cart,
}: any) {
  const { formatted } = calculateCartTotals(cart);

  return (
    <div className={styles.cartListWrapper}>
      {cart.map((cartItem:any) => (
        <div
          key={cartItem.id}
          className={styles.cartItemWrapper}
        >
          <h4>{cartItem.product.title} x {cartItem.quantity}</h4>
          <h4>{formatMoney(cartItem.product.price)}</h4>
        </div>
      ))}
      <div className={styles.totalsWrapper}>
        <h4>Total:</h4>
        <h4>{formatted}</h4>
      </div>
    </div>
  );
}

