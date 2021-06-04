import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Stepper, Step, StepLabel, StepConnector }from '@material-ui/core';
import axios from 'axios';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
const useStyles = makeStyles({
  root: {
    width: 500,
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);
QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};
function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}
function getSteps() {
  return ['Detroit', 'Southfield'];
}
export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // get locations of targets
  const googleInfo = {
    BaseLocation: "555 E Lafayette St, Detroit, MI 48226",
    TargetLocation: "21000 W 10 Mile Rd, Southfield, MI 48075",
    ApiURL: "https://maps.googleapis.com/maps/api/distancematrix/json?",
    apikey: "AIzaSyDTEgLNTOFltl4A-swglKna_DWvuCKSRF8"
  };
  const [distanceInfo, setDistanceInfo] = useState('')
  useEffect(() => {
    axios.post("http://localhost:5000/googleapi/getDistance", googleInfo)
    .then(res => setDistanceInfo(JSON.parse(res.data).rows[0].elements[0]))
  },[]);
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
  
  return (
    <Card className={classes.root} variant="outlined">
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Card>
  );
}