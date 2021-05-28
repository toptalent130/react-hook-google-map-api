import axios from 'axios';
import { API_URL } from '../config';

  import {
    GET_FIRSTPAGE_DATA,
    GET_ERROR
   } from './types';

  // Register User
  export const getFirstPageData = (data) => dispatch => {
    window.location.href = "/second"
    axios
      .get(`${API_URL}/location`, data)
      .then((res) => {
          dispatch({
            type: GET_FIRSTPAGE_DATA,
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
