import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ orderId }) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {orderId}
  </div>
);
Order.propTypes = {
  orderId: PropTypes.string,
};

export default Order;
