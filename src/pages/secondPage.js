import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Pager from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { CardHeader, TextField, CircularProgress, Checkbox, FormControlLabel, Select, InputLabel, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AttachMoney, ArrowForward, ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '60%',
    margin: '0 20%'
  },
  valuation: {
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
  header: {
    textAlign: 'center',
    marginTop: '2%',
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
  return (
    <div className={classes.root}>
        <Typography className={classes.header} variant="h4">
            Valuation
        </Typography>
        <div className={classes.valuation}>
          <Typography className={classes.header} variant="h4">
              Price:  <AttachMoney fontSize="large"/>1,234,567
          </Typography>
          <Typography className={classes.header} variant="h4">
              Price per square meter: <AttachMoney fontSize="large"/>697.17
          </Typography>
          <Typography className={classes.header} variant="h4">
              Average zone price: <AttachMoney fontSize="large"/>1,555,666
          </Typography>
          <Typography className={classes.header} variant="h4">
              Average price per square memter: <AttachMoney fontSize="large"/>789
          </Typography>
        </div>
        <Link to="/third" style={{float:"right",marginRight:"6%"}}>
            <ArrowForward/>
         </Link>
         <Link to="/" style={{float:"left",marginLeft:"2%"}}>
           <ArrowBack/>
        </Link>
    </div>
  )
}
