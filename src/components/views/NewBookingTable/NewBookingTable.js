import React from 'react';
import styles from './NewBookingTable.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const NewBookingTable = () => {

  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [duration, setDuration] = React.useState('');
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState('');
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  const [state, setState] = React.useState({
    water: true,
    bread: false,
  });
  const handleChangeStarter = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { water, bread } = state;

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
        <EventAvailableOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h1" >
        Add new reservation
      </Typography>
      <form className={styles.form} noValidate>
        <Grid item xs={6}>
          <TextField className={styles.textField}
            variant="outlined"
            fullWidth
            margin="normal"
            id="id"
            label="Event id"
            name="id"
            autoComplete="id"
            autoFocus
            size="small"
            inputProps={{ readOnly: false }}
          />
        </Grid>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={8}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Event date"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Event time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <Grid item xs={6}>
          <FormControl size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Table</InputLabel>
            <Select className={styles.select}
              labelId="table"
              id="table"
              value={table}
              onChange={handleChangeTable}
              label="Table"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <FormControl size="small" margin="normal" component="fieldset">
          <FormLabel component="legend">Repeat</FormLabel>
          <RadioGroup aria-label="repeat" name="repeat" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="true" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="false" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
        <Grid item xs={6}>
          <FormControl size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Duration</InputLabel>
            <Select className={styles.select}
              labelId="duration"
              id="duration"
              value={duration}
              onChange={handleChangeDuration}
              label="Duration"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            size="small"
            id="outlined-number"
            label="People"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Starters</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={water} onChange={handleChangeStarter} name="water" />}
                label="Water"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bread} onChange={handleChangeStarter} name="bread" />}
                label="Bread"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField className={`${styles.textField} ${styles.phone}`}
            variant="outlined"
            fullWidth
            margin="normal"
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            autoFocus
            size="small"
          />

          <TextField className={`${styles.textField} ${styles.phone}`}
            variant="outlined"
            fullWidth
            margin="normal"
            id="mail"
            label="E-mail"
            name="mail"
            autoComplete="mail"
            autoFocus
            size="small"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
          Add reservation
        </Button>
      </form>
    </Paper>
  );
};


export default NewBookingTable;
