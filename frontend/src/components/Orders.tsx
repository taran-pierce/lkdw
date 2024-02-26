import Link from 'next/link';

import formatMoney from '@/utils/formatMoney';
import Container from "./Container";

import styles from './orders.module.scss';

export default function Orders({
  orders,
}: any) {
  return (
    <div className={styles.ordersWrapper}>
      <Container>
        <h2>Order History</h2>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order:any) => (
              <tr key={order.id}>
                <td>
                  <Link href={`/order/${order.id}`}>
                    {order.id}
                  </Link>
                </td>
                <td>{order.items.length}</td>
                <td>{formatMoney(order.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}