import React from 'react';
import styles from './BookedTable.module.scss';
import { useParams } from 'react-router-dom';

const BookedTable = () => {
  let { tableId } = useParams();

  return (
    <div className={styles.component}>
      <h2>BookedTable view</h2>

      {tableId}
    </div>
  );
};
export default BookedTable;
