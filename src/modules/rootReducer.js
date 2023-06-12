import { combineReducers } from 'redux';
import userReducer from 'modules/userReducer';
 
const rootReducer = combineReducers({
    userReducer
});
 
export default rootReducer;