import IStoreState from "../store/IStoreState";

const defaultState: IStoreState = {
  isAuthenticated: false,
  error: undefined,
  loading: false
};

export default defaultState;
