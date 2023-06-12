import { combineReducers } from 'redux';
import userReducer from 'modules/userReducer';
import boardReducer from 'modules/boardReducer';
 
const rootReducer = combineReducers({
    userReducer,
    boardReducer
});
 
export default rootReducer;