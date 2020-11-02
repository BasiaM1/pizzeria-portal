import React from 'react';
import styles from './BookedEvent.module.scss';
import { useParams } from 'react-router-dom';

const BookedEvent = () => {
  let { eventId } = useParams();

  return (
    <div className={styles.component}>
      <h2>BookedEvent view</h2>

      {eventId}
    </div>
  );
};
export default BookedEvent;
