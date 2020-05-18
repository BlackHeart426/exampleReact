import keys from "../../ActionTypeKeys";
import IStoreState from "../../../store/IStoreState";
import {ISignInInProgressAction, ISignInSuccessAction, ISignInFailAction} from "./signin";
import {
    postData,
    signIn as signInToApi,
} from "../../../api/authenticationApi";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {API_ROOT} from "../../../constants/Defaults";
import {Simulate} from "react-dom/test-utils";

export function signInActionCreator(
    email: string,
    password: string
): (dispatch: ThunkDispatch<IStoreState, undefined, ISignInFailAction | ISignInInProgressAction | ISignInSuccessAction>) => Promise<void> {
    return (dispatch: ThunkDispatch<IStoreState, undefined, ISignInFailAction | ISignInInProgressAction | ISignInSuccessAction>) => {
        dispatch(signInInProgressActionCreator())
        const params = {
            email,
            password
        }

        // dispatch(signInSuccessActionCreator())
        // return fetch('http://example.com/todos')
        //     .then(res => res.json())
        //     .then(dispatch(signInSuccessActionCreator()))
        //     .catch(dispatch(signInFailActionCreator()))

        return signInToApi(email, password)
            .then(res => {
                if(res) {
                    dispatch(signInSuccessActionCreator())
                } else {
                    dispatch(signInFailActionCreator({name: '210', message: 'login not found'}))
                }
            })
            .catch(error => {
                dispatch(signInFailActionCreator(error))
            })
        // try {
        //     await signInToApi(email, password)
        //     dispatch(signInSuccessActionCreator())
        // } catch (e) {
        //     dispatch(signInFailActionCreator(e))
        // }
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