import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import initialState from "./initialState";
import IStoreState from "../store/IStoreState";

export default function authenticationReducer(
  state: IStoreState = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.SIGNIN_INPROGRESS:
      return {...state, loading: true}
    case ActionTypeKeys.SIGNIN_SUCCESS:
      return {...state, isAuthenticated: true, loading: false}
    case ActionTypeKeys.SIGNIN_FAIL:
      return {...state, isAuthenticated: false, loading: false, error: action.payload}
    // case ActionTypeKeys.SIGNOUT_SUCCESS:
    //   return onSignOut();
    default:
      return state;
  }
}

