import { combineReducers } from "redux";
import triviaReducer from './triviaReducer';

export default combineReducers({
    trivia: triviaReducer
});