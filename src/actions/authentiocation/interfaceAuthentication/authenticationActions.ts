import keys from "../../ActionTypeKeys";
import IStoreState from "../../../store/IStoreState";
import {ISignInInProgressAction, ISignInSuccessAction, ISignInFailAction} from "./signin";
import {
    signIn as signInToApi,
} from "../../../api/authenticationApi";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export function signInActionCreator(
    email: string,
    password: string
): (dispatch: ThunkDispatch<IStoreState, undefined, ISignInFailAction | ISignInInProgressAction | ISignInSuccessAction>) => Promise<void> {
    return async (dispatch: ThunkDispatch<IStoreState, undefined, ISignInFailAction | ISignInInProgressAction | ISignInSuccessAction>) => {
        dispatch(signInInProgressActionCreator())
        try {
            await signInToApi(email, password);
            dispatch(signInSuccessActionCreator())
        } catch (e) {
            dispatch(signInFailActionCreator(e))
        }
    }
}

export function signInInProgressActionCreator(): ISignInInProgressAction {
    return {
        type: keys.SIGNIN_INPROGRESS
    }
}

export function signInSuccessActionCreator(): ISignInSuccessAction {
    return {
        type: keys.SIGNIN_SUCCESS
    }
}

export function signInFailActionCreator(error: Error): ISignInFailAction {
    return {
        payload: {
            error
        },
        type: keys.SIGNIN_FAIL
    };
}