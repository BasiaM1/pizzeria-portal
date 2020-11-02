import React from 'react';
import styles from './Order.module.scss';
import { useParams } from 'react-router-dom';

const Order = () => {
  let { orderId } = useParams();

  return (
    <div className={styles.component}>
      <h2>Order view</h2>

      {orderId}
    </div>
  );
};
export default Order;
