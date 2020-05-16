export default interface IStoreState {
  readonly isAuthenticated: boolean;
  readonly error: string|undefined,
  readonly loading: boolean
};
