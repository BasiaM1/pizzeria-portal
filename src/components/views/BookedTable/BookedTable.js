import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTable.module.scss';

const BookedTable = ({ tableId }) => (
  <div className={styles.component}>
    <h2>BookedTable view</h2>

    {tableId}
  </div>
);
BookedTable.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTable;
