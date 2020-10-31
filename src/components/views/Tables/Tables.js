import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking table</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active'>Booked table 123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`} activeClassName='active'>New booking event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/456abc`} activeClassName='active'>Booked event 456abc</Link>
  </div>
);


export default Tables;
