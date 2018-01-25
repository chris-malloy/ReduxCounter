import { combineReducers } from 'redux';
import changeNumberReducer from './changeNumberReducer'

const rootReducer = combineReducers({
    changeNumber: changeNumberReducer
});

export default rootReducer;