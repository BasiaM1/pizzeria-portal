import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking table</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}>Booked table 123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>New booking event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/456abc`}>Booked event 456abc</Link>
  </div>
);


export default Tables;
