import { createStore, combineReducers } from "redux";
import products from "./products/index";
const reducers = combineReducers({ products });
const store = createStore(reducers);

export default store;
