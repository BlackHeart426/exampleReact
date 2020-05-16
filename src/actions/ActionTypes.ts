import {
    ISignInFailAction,
    ISignInInProgressAction,
    ISignInSuccessAction
} from "./authentiocation/interfaceAuthentication/signin";

type ActionTypes =
    | ISignInSuccessAction
    | ISignInInProgressAction
    | ISignInFailAction

export default ActionTypes