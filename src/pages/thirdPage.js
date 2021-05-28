import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Pager from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { VictoryChart, VictoryBar, VictoryTheme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { MenuBook, AttachMoney, School, Security, LocalHospital, SportsSoccer, Business,  ArrowForward, ArrowBack } from '@material-ui/icons';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import { Chart } from 'react-charts';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '0 10%'
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
    padding: '2% 10%',
    textAlign: 'center'
  },
  column_1: {
    width: '47%',
    height: '700px',
    float: 'left',
    background: 'whitegray',
    borderRadius: '3px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    marginTop: '2%'
  },
  column_2: {
    width: '47%',
    height: '700px',
    float: 'right',
    background: 'whitegray',
    marginTop: '2%'
  },
  column_2_row_1: {
    width: '100%',
    height: '333px',
    borderRadius: '3px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    display: 'flex'
  },
  column_2_row_2: {
    width: '100%',
    height: '333px',
    borderRadius: '3px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    marginTop: '4%',
    padding: "10% 5%"
  },
  column_1_1: {
    width: "100%",
    height: '333px',
  },
  column_1_2: {
    width: "100%",
    height: '333px'
  },
  linearchart: {
    width: "40%",
    height: "70%",
    margin: "3% 3%",
    float:'left'
  },
  smallpiechart: {
    width: "20%",
    height: "70%",
    margin: "3% 2%"
  },
  linearchartnear: {
    marginTop: "5%",
    width: "40%",
    height: "70%",
    float: 'right'
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
  bigpiechart: {
    width: "30%",
    height: "70%",
    float: "left",
    margin: "3% 5%",
  },
  barchart: {
    width: "40%",
    height: "70%",
    float: "right",
    margin: "5% 3%",
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
   //this object represents the classes that we defined
   const classes = useStyles();
  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //the useState() hook allows our component to hold its own internal state
  //the dogName property isn't going to be used anywhere else, so there's no need to hold it on the redux store
  const [dogName, setDogName] = useState('');
  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
  // const isLoading = useSelector((state: IAppState) => state.dogState.loading);

  //a function to dispatch multiple actions
  // const getDog = () => {
  //   dispatch(loadDogAction(true));
  //   dispatch(RandomDogAction(dogName));
  // }

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      { label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
  const series = React.useMemo(
      () => ({
        type: 'bar'
      }),
      []
    )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div>
      <Typography className={classes.header} variant="h4">
          Zone stats
      </Typography>
      <div className={classes.root}>
        <div className={classes.column_1}>
            <div className={classes.column_1_1}>
              <div className={classes.linearchart}>
                <h5><MenuBook/>leads and searchs</h5>
                <Chart  data={data} axes={axes} />
              </div>
              <div className={classes.linearchartnear}>
                <Typography>Median price <h3><AttachMoney fontSize="large"/>4.5M</h3></Typography>
                <br/>
                <Typography>Leads <h3>123</h3></Typography>
              </div>
            </div>
            <div className={classes.column_1_2}>
              <div className={classes.bigpiechart}>
                <h5>Volumn by type</h5>
                <PieChart
                  data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                  ]}
                />
              </div>
              <div className={classes.barchart}>
                <h5>Commercial offer</h5>
                <Chart data={data}  series={series} axes={axes} />
              </div>
            </div>
        </div>
        <div className={classes.column_2}>
          <div className={classes.column_2_row_1}>
            <div className={classes.smallpiechart}>
              <Typography><School/>Schools</Typography>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
            <div className={classes.smallpiechart}>
              <Typography><LocalHospital/>Hospitals and clinics</Typography>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
            <div className={classes.smallpiechart}>
              <Typography><SportsSoccer/>Recreation</Typography>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
            <div className={classes.smallpiechart}>
              <Typography><Business/>Enterprises</Typography>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
          </div>
          <div className={classes.column_2_row_2}>
            <h3><Security fontSize="large"/><b>Safe/Risk/Not known</b></h3>
          </div>
        </div>
      </div>
      <br/>
       <Link to="/second" style={{float:"left",marginLeft:"10%"}}>
         <ArrowBack/>
      </Link>
    </div>
  )
}
