import keys from "../../../ActionTypeKeys";
import {signInFailActionCreator, signInInProgressActionCreator, signInSuccessActionCreator, signInActionCreator} from "../authenticationActions"
import {Simulate} from "react-dom/test-utils";

import fetchMock from 'fetch-mock'
import thunk from "redux-thunk";
const middlewares = [thunk]
import configureMockStore from 'redux-mock-store'
import {API_ROOT} from "../../../../constants/Defaults";
import {signIn as signInToApi} from "../../../../api/authenticationApi";
import {AnyAction} from "redux";
import error = Simulate.error;
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
                payload: {
                    error: { name: '404', message: 'Not found'}
                }
            }
            expect(signInFailActionCreator({name: "404", message: 'Not found'})).toEqual(expectedAction)
        })
        it('signInSuccessActionCreator(): should create an action set loading', ()=>{
            const expectedAction = {
                type: keys.SIGNIN_SUCCESS,
            }
            expect(signInSuccessActionCreator()).toEqual(expectedAction)
        })
    })

    describe('async actions', ()=>{
        afterEach(()=>{
            fetchMock.reset()
            fetchMock.restore()
        })

        it('creates LOGIN_SIGNIN_FAIL when fetching login false', ()=>{
            fetchMock.getOnce(`${API_ROOT}/login`, {
                headers: {'content_type': 'application/json'},
                body: { isAuth: false }
            })

            const expectedActions = [
                signInInProgressActionCreator(),
                // signInSuccessActionCreator(),
                signInFailActionCreator({name: '210', message: 'login not found'})]
            const store = mockStore({ isAuth: false })
            const email = 'test@gmail.com'
            const password = '1q2w3e4r'
            return store.dispatch( <AnyAction><unknown>signInActionCreator(email, password)).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })

        it('creates LOGIN_SIGNIN_SUCCESS when fetching login false', ()=>{
            fetchMock.getOnce(`${API_ROOT}/login`, {
                headers: {'content_type': 'application/json'},
                body: { isAuth: true }
            })

            const expectedActions = [
                signInInProgressActionCreator(),
                signInSuccessActionCreator(),
                // signInFailActionCreator({name: '210', message: 'login not found'})
            ]
            const store = mockStore({ isAuth: true })
            const email = 'test@gmail.com'
            const password = '1q2w3e4r'
            return store.dispatch( <AnyAction><unknown>signInActionCreator(email, password)).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })
    })
})