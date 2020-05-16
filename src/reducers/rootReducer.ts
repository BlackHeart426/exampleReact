import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import isAuthenticated from "./authenticationReducer";

const rootReducer = combineReducers<IStoreState>({
  isAuthenticated,
});

export default rootReducer;
