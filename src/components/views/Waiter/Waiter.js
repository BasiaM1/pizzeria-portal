import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const demoContent = [
  { id: '1', status: 'free', order: null },
  { id: '2', status: 'thinking', order: null },
  { id: '3', status: 'ordered', order: 123 },
  { id: '4', status: 'prepared', order: 234 },
  { id: '5', status: 'delivered', order: 345 },
  { id: '6', status: 'paid', order: 456 },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>

      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.component}>
    <Table className={styles.table}>
      <TableHead>
        <TableRow className={styles.tablehead}>
          <TableCell className={styles.title}>Table</TableCell>
          <TableCell className={styles.title}>Status</TableCell>
          <TableCell className={styles.title}>Order</TableCell>
          <TableCell className={styles.title}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;
