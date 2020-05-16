import {AnyAction, Dispatch} from "redux";
import keys from "../../ActionTypeKeys";
import IStoreState from "../../../store/IStoreState";
import {ISignInInProgressAction, ISignInSuccessAction, ISignInFailAction} from "./signin";
import {
    signIn as signInToApi,
} from "../../../api/authenticationApi";

export function signInActionCreator(
    email: string,
    password: string
): (dispatch: Dispatch<AnyAction>) => Promise<void> {
    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch(signInInProgressActionCreator())
        try {
            await signInToApi(email, password);
            dispatch(signInSuccessActionCreator())
        } catch (e) {
            dispatch(signInFailActionCreator(e))
        }
    }
}

function signInInProgressActionCreator(): ISignInInProgressAction {
    return {
        type: keys.SIGNIN_INPROGRESS
    }
}

function signInSuccessActionCreator(): ISignInSuccessAction {
    return {
        type: keys.SIGNIN_SUCCESS
    }
}

function signInFailActionCreator(error: Error): ISignInFailAction {
    return {
        payload: {
            error
        },
        type: keys.SIGNIN_FAIL
    };
}