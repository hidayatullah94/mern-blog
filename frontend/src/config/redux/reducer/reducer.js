import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import createReducer from "./createReducer";

// combine untuk memanajement semua state ///fungsi untuk menjalankan semua state, action untuk merubah value state

const reducer = combineReducers({ homeReducer, createReducer });

export default reducer;
