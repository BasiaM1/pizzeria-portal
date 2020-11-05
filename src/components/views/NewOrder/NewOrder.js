import React from 'react';
import styles from './NewOrder.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const NewOrder = () => {

  const [table, setTable] = React.useState('');

  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [amountPizza, setAmountPizza] = React.useState('');

  const handleChangeAmountPizza = (event) => {
    setAmountPizza(event.target.value);
  };

  const [amountSalad, setAmountSalad] = React.useState('');

  const handleChangeAmountSalad = (event) => {
    setAmountSalad(event.target.value);
  };

  const [amountCake, setAmountCake] = React.useState('');

  const handleChangeAmountCake = (event) => {
    setAmountCake(event.target.value);
  };
  const [state, setState] = React.useState({
    cheese: false,
    cucumber: false,
    tomato: false,
    feta: false,
    mushrooms: false,
    olives: false,
    oregano: false,
    tomatoes: false,
    fetaS: false,
    cucumberS: false,
    brownie: false,
    appleCake: false,
    cheesecake: false,
  });

  const handleChangePizza = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChangeSalad = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChangeCake = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { cheese, cucumber, tomato, feta, mushrooms, olives, oregano, tomatoes, cucumberS, fetaS, brownie, appleCake, cheesecake } = state;

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
        <RestaurantMenuOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h1" >
        Add new order
      </Typography>
      <form className={styles.form} noValidate>
        <Grid item xs={6}>
          <TextField className={styles.textField}
            variant="outlined"
            fullWidth
            margin="normal"
            id="id"
            label="Order id"
            name="id"
            autoComplete="id"
            autoFocus
            size="small"
          />
        </Grid>

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

        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Pizza with options</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={cheese} onChange={handleChangePizza} name="cheese" />}
                label="Cheese"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={cucumber} onChange={handleChangePizza} name="cucumber" />}
                label="Cucumber"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={tomato} onChange={handleChangePizza} name="tomato" />}
                label="Tomato"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={feta} onChange={handleChangePizza} name="feta" />}
                label="Feta"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={mushrooms} onChange={handleChangePizza} name="mushrooms" />}
                label="Mushrooms"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={olives} onChange={handleChangePizza} name="olives" />}
                label="Olives"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={oregano} onChange={handleChangePizza} name="oregano" />}
                label="Oregano"
              />
            </FormGroup>
          </FormControl>

          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel id="demo-simple-select-outlined-label">Amount</InputLabel>
            <Select
              labelId="amountPizza"
              id="amountPizza"
              value={amountPizza}
              onChange={handleChangeAmountPizza}
              label="Amount of pizza"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Salad with options</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={cucumberS} onChange={handleChangeSalad} name="cucumberS" />}
                label="Cucumber"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={tomatoes} onChange={handleChangeSalad} name="tomatoes" />}
                label="Tomatoes"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={fetaS} onChange={handleChangeSalad} name="fetaS" />}
                label="Feta"
              />
            </FormGroup>
          </FormControl>

          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel id="demo-simple-select-outlined-label" >Amount</InputLabel>
            <Select
              labelId="amountSalad"
              id="amountSalad"
              value={amountSalad}
              onChange={handleChangeAmountSalad}
              label="Amount of salad"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Cake with options</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={brownie} onChange={handleChangeCake} name="brownie" />}
                label="brownie"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={appleCake} onChange={handleChangeCake} name="appleCake" />}
                label="apple cake"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={cheesecake} onChange={handleChangeCake} name="cheesecake" />}
                label="cheesecake"
              />
            </FormGroup>
          </FormControl>

          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel id="demo-simple-select-outlined-label" >Amount</InputLabel>
            <Select
              labelId="amountCake"
              id="amountCake"
              value={amountCake}
              onChange={handleChangeAmountCake}
              label="Amount of cake"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
          Add order
        </Button>
      </form>
    </Paper >
  );
};


export default NewOrder;
