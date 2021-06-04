import pathTwoReducer from './pathTwoReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    first: pathTwoReducer,
})

export default rootReducer
