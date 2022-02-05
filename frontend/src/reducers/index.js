import { createStore, combineReducers } from "redux";
import products from "./products/index";
import ordersReducer from "./orders";
import loginReducer from "./login/index";
const reducers = combineReducers({ products, loginReducer, ordersReducer });

const store = createStore(reducers);

export default store;
