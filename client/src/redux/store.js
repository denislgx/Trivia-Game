import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/index";
import { loadState, saveState } from "../localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;