import { combineReducers } from 'redux';
import movies from './reducer';


export enum EReduxActionTypes {
    GET_MOVIE = 'GET_MOVIE',
    GET_MOVIES = 'GET_MOVIES',
    RESET_MOVIE = 'RESET_MOVIE',
}

export interface IReduxBaseAction {
    type: EReduxActionTypes;
}

const rootReducer = combineReducers({
    movies
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;