import { createStore, combineReducers } from "redux";
import products from "./products/index";

import loginReducer from "./login/index";
const reducers = combineReducers({ products, loginReducer });

const store = createStore(reducers);

export default store;
