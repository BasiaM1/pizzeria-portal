import React from 'react';
import styles from './BookedEvent.module.scss';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const BookedEvent = () => {
  let { eventId } = useParams();

  const customData = {
    date: '2020-12-04',
    hour: '18:00',
    table: '1',
    duration: '3',
    ppl: '4',
    starters: ['water'],
    phone: '546809225',
    mail: 'halko@o2.pl',
  };


  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
        <EventOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h1" >
        Event view
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Event id</TableCell>
              <TableCell className={styles.title}>{eventId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>date</TableCell>
              <TableCell>{customData.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>hour</TableCell>
              <TableCell>{customData.hour}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>{customData.table}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>duration</TableCell>
              <TableCell>{customData.duration}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>people</TableCell>
              <TableCell>{customData.ppl}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>starters</TableCell>
              <TableCell>{customData.starters}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>phone</TableCell>
              <TableCell>{customData.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>mail</TableCell>
              <TableCell>{customData.mail}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default BookedEvent;
