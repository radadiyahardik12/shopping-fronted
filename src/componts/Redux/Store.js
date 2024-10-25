// src/redux/store.js
import { applyMiddleware, combineReducers, createStore } from 'redux';
import productReducer from './reducers';
import {thunk} from 'redux-thunk'


const rootReducer = combineReducers({
    productReducer, // Add other reducers if needed
  });

// Create the Redux store
const Store = createStore(
    rootReducer, // reducer
    applyMiddleware(thunk)
);

export default Store;
