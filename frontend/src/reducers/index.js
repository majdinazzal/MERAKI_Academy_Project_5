import { createStore, combineReducers } from "redux";
import products from "./products/index";
import login from "./login/index";
const reducers = combineReducers({ products,login });
const store = createStore(reducers);

export default store;
