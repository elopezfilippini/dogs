import {applyMiddleware, createStore,compose } from "redux";
import  {dogsReducer}  from "./Reducer";
import logger from 'redux-logger'; // Asegúrate de instalar redux-logger

import  thunkMiddleware  from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOS__||compose;
const store = createStore(dogsReducer, composeEnhancer(applyMiddleware(thunkMiddleware,logger)));

 export default store;
 