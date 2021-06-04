import axios from 'axios';
import { API_URL } from '../config';

  import {
    GET_TWOPATH_DATA,
    GET_ERROR
   } from './types';

  // Register User
  export const getTwoPathData = (data) => dispatch => {
    axios
      .get(`${API_URL}/location`, data)
      .then((res) => {
          dispatch({
            type: GET_TWOPATH_DATA,
            payload: res.data
          })
        }
      ).catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err.response.data
        })
      );
  };
