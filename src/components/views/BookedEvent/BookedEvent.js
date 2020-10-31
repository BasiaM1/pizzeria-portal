import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedEvent.module.scss';

const BookedEvent = ({ eventId }) => (
  <div className={styles.component}>
    <h2>BookedEvent view</h2>
    {eventId}
  </div>
);

BookedEvent.propTypes = {
  eventId: PropTypes.string,
};


export default BookedEvent;
