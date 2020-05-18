import keys from "../../actions/ActionTypeKeys";
import reducer from "../../reducers/authenticationReducer"
import initialState from "../initialState";
import IStoreState from "../../store/IStoreState";
import {
    ISignInFailAction,
    ISignInInProgressAction,
    ISignInSuccessAction
} from "../../actions/authentiocation/interfaceAuthentication/signin";

describe('login reducers',()=>{
    it('login_INPROGRESS',()=>{
        const actionINPROGRESS: ISignInInProgressAction = {
            type: keys.SIGNIN_INPROGRESS
        }

        expect(reducer(initialState, actionINPROGRESS)).toEqual({
            ...initialState,
            loading: true,
        })
    })
    it('login_FAIL',()=>{
        const actionFAIL: ISignInFailAction = {
            type: keys.SIGNIN_FAIL,
            payload: {
                error: {name: 'fail', message: 'server bot available'}
            }
        }

        expect(reducer(initialState, actionFAIL)).toEqual({
            ...initialState,
            loading: false,
            error: {name: 'fail', message: 'server bot available'}
        })
    })
    it('login_SUCCESS',()=>{
        const actionSUCCESS: ISignInSuccessAction = {
            type: keys.SIGNIN_SUCCESS
        }

        expect(reducer(initialState, actionSUCCESS)).toEqual({
            ...initialState,
            loading: false,
            isAuthenticated: true
        })
    })
})