import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
  isAuthenticated: authenticationReducer
});

export default rootReducer;
