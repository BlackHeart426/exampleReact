import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import IStoreState from "./IStoreState";
import movies from "../redux-typescript/reducer";

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}
