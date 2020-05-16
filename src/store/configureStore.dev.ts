import { applyMiddleware, createStore } from "redux";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import IStoreState from "./IStoreState";

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}
