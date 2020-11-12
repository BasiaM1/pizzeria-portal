import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class Waiter extends React.Component {

  static propTypes = {
    fetchTables: PropTypes.func,
    fetchStatusUpdate: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.node,
    }),
    tables: PropTypes.object,
  }
  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status, id) {
    const { fetchStatusUpdate } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => fetchStatusUpdate(id, 'thinking')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>thinking</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'new order')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>

        );
      case 'ordered':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'prepared')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/123`}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'delivered')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/567`}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'paid')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/567`}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'free')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/145`}>free</Button>
        );
      default:
        return null;
    }
  }
  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
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
              {tables.map(row => (
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
                    {this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
