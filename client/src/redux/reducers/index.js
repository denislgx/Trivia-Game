import { combineReducers } from "redux";
import triviaReducer from "./triviaReducer";
import answersReducers from "./answersReducers";

export default combineReducers({
    trivia: triviaReducer,
    answers: answersReducers
});