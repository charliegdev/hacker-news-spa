import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import combinedReducer from "./reducers";

export default createStore(combinedReducer, applyMiddleware(thunkMiddleware));