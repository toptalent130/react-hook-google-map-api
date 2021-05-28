import firstReducer from './firstReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    first: firstReducer,
})

export default rootReducer
