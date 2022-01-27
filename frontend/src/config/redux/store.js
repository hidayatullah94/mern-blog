// MULTIPELREDUCER / COMBINE;
import { applyMiddleware, createStore } from "redux";
import reducer from "../redux/reducer/reducer";
import thunk from "redux-thunk"; // untuk menerima fungsi yg bersifat asyincronous(action)

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

//! jika hanya ada satu reducer
// const initialState ={ data:[],}
// const reducer = (state = initialState, action) => {
//   return state;
// };
