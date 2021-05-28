import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Pager from '@material-ui/core/Paper';
import { CardHeader, TextField, Typography, CircularProgress, Checkbox, FormControlLabel, Select, InputLabel, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import GET_FIRSTPAGE_DATA from "../actions/types";
import { getFirstPageData } from '../actions/actions';

const useStyles = makeStyles({
  root: {
    width: '60%',
    margin: '0 20%'
  },
  house_first_column: {
    float: 'left',
    width: '50%'
  },
  house_second_column: {
    float: 'right',
    width: '50%'
  },
  input: {
    width: '90%',
  },
  header: {
    textAlign: 'center',
    marginTop: '2%',
  },
  house: {
      width: '90%',
      height: '330px',
      background: 'whitegray',
      borderRadius: '3px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'black',
      margin: '1% 3%',
      padding: '2% 10%'
  },
  ameniubi: {
    position: 'relative',
    width: '90%',
    margin: '3% 3%',
  },
  ameni: {
    float: 'left',
    width: '49%',
    height: '330px',
    background: 'whitegray',
    borderRadius: '3px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    padding: '5% 10%'
  },
  ubi: {
    float: 'right',
    width: '49%',
    justifyContent: 'space-between',
    height: '330px',
    background: 'whitegray',
    borderRadius: '3px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    marginLeft: '5px',
    padding: '5% 10%'
  },
  button: {
    marginTop: '10px',
    height: '7vh',
    width: '90%',
    margin: '2% 5%'
  },
  number: {
    width: '300px'
  },
  select: {
    width: '300px'
  },
  text: {
    width: '300px'
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(state=>state.first)
  const [values, setValues] = useState({});
  const changeState = (e) => {
    if (e.target.checked === true){
      setValues({...values, [e.target.name]: e.target.checked})
    } else {
      setValues({...values, [e.target.name]: e.target.value})
    }
  }
  useEffect(() => {
  },[data]);
  return (
      <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.header} variant="h4">
            Automated Valuation Model - OKOL
        </Typography>
        <div className={classes.house}>
          <div className={classes.house_first_column}>
            <TextField className={classes.text} onChange={e=>changeState(e)} name="age" defaultValue="2 years" id="standard-basic" label="Age" />
            <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Baths" type="number"
                InputLabelProps={{
                shrink: true,
                }}
                name="bathrooms"
            />
            <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Floors" type="number"
                InputLabelProps={{
                shrink: true,
                }}
                name="floor"
            />
            <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Rooms" type="number"
                InputLabelProps={{
                shrink: true,
                }}
                name="service_room"
            />
          </div>
          <div className={classes.house_second_column}>
            <InputLabel id="demo-simple-select-label">House Type</InputLabel>
            <Select className={classes.select} onChange={e=>changeState(e)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={10}
            >
              <MenuItem value={10}>House</MenuItem>
              <MenuItem value={20}>Apartment</MenuItem>
              <MenuItem value={30}>Townhouse</MenuItem>
            </Select>
              <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Size house" type="number"
                  InputLabelProps={{
                  shrink: true,
                  }}
                  name="size_house"
              />
              <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Size ground" type="number"
                  InputLabelProps={{
                  shrink: true,
                  }}
                  name="size_ground"
              />
              <TextField className={classes.number} onChange={e=>changeState(e)} id="filled-number" label="Parking lots" type="number"
                  InputLabelProps={{
                  shrink: true,
                  }}
                  name="parking_num"
              />
          </div>
        </div>
        <div className={classes.ameniubi}>
          <div className={classes.ameni}>
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="air" />} label="conditionated air" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="pool" />} label="swimming pool" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="laundry" />} label="laundry" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="gym" />} label="gym" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="garden" />} label="garden" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="security" />} label="private security" />
            <FormControlLabel control={<Checkbox  onChange={e=>changeState(e)} color="default" name="terrace" />} label="terrace" />
            <TextField className={classes.number}  onChange={e=>changeState(e)} id="filled-number" name="extra" label="Extra amenities" type="number"
                InputLabelProps={{
                shrink: true,
                }}
            />
          </div>
          <div className={classes.ubi}>
            <TextField className={classes.text}
              onChange={e=>changeState(e)}
              id="standard-password-input"
              label="Zipcode"
              name="zipcode"
              defaultValue="07000"
            />
            <Button className={classes.button} variant="contained" size="small" color="primary">
               <Typography> See zipcode stats</Typography>
            </Button>
          </div>
          <Button className={classes.button} onClick={()=>dispatch(getFirstPageData(values))} variant="contained" size="large" color="primary">
            <Typography> Valuate</Typography>
          </Button>
        </div>
    </form>
  )
}
