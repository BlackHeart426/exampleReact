import keys from "../../../ActionTypeKeys";
import {signInFailActionCreator, signInInProgressActionCreator, signInSuccessActionCreator, signInActionCreator} from "../authenticationActions"
import {Simulate} from "react-dom/test-utils";

import fetchMock from 'fetch-mock'
import thunk from "redux-thunk";
const middlewares = [thunk]
import configureMockStore from 'redux-mock-store'
import {API_ROOT} from "../../../../constants/Defaults";
const mockStore = configureMockStore(middlewares)

describe('signInActionCreator', ()=>{
    describe('sync actions', ()=>{
        it('signInInProgressActionCreator(): should create an action set loading', ()=>{
            const expectedAction = {
                type: keys.SIGNIN_INPROGRESS
            }
            expect(signInInProgressActionCreator()).toEqual(expectedAction)
        })
        it('signInFailActionCreator(): should create an action set loading', ()=>{
            const expectedAction = {
                type: keys.SIGNIN_FAIL,
                payload: {name: "404", message: 'Not found'}
            }
            expect(signInFailActionCreator({name: "404", message: 'Not found'})).toEqual(expectedAction)
        })
        it('signInSuccessActionCreator(): should create an action set loading', ()=>{
            const expectedAction = {
                type: keys.SIGNIN_SUCCESS
            }
            expect(signInSuccessActionCreator()).toEqual(expectedAction)
        })
    })

    describe('async actions', ()=>{
        afterEach(()=>{
            fetchMock.reset()
            fetchMock.restore()
        })

        it('creates LOGIN_SIGNIN_SUCCESS when fetching login true', (email: string, password: string)=>{
            fetchMock.getOnce(`${API_ROOT}/login`, {
                headers: {'content_type': 'application/json'},
                body: { isAuth: true }
            })

            const expectedActions = [signInInProgressActionCreator(), signInSuccessActionCreator()]
            const store = mockStore({})

            return store.dispatch(signInActionCreator(email, password))
        })
    })
})