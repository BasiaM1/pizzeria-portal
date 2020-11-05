import React from 'react';
import styles from './Order.module.scss';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const Order = () => {
  let { orderId } = useParams();

  const customData = {
    table: 1,
    order: 'pizza',
    options: ['cheese', 'tomato', 'oregano', 'olives'],
    amount: 1,
  };

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
        <RestaurantMenuOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h1" >
        Order view
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Order id</TableCell>
              <TableCell className={styles.title}>{orderId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>{customData.table}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>order</TableCell>
              <TableCell>{customData.order}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>options</TableCell>
              <TableCell><div>{customData.options.map(option => (
                <p key={option}>{option}</p>
              ))}</div></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>amount</TableCell>
              <TableCell>{customData.amount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default Order;
