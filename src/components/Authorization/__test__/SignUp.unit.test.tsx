import React, {Component, useEffect} from "react";
import {AuthorizationSignUp} from "../AuthorizationSignUp"
import {mount, shallow} from "enzyme";
import configureMockStore from "redux-mock-store";


describe('<AuthorizationSignUp/>',  () => {
    const mockLogin = jest.fn()
    const password = '4TYE46E8RT!@qw'
    const name = 'register'
    const wrongPassword = '11'
    const email = 'vas@gmail.com'
    const wrongEmail = 'vascom'

    const mockStore = configureMockStore();
    const store = mockStore({});

    // const context = { signIn: mockLogin }
    const register = shallow(<AuthorizationSignUp shouldRemember={false} onChangeForm={(name: string) => mockLogin(name)} onHideModal={mockLogin}/>)
    // const register = mount(<Provider store={store}>
    //     <AuthorizationLogin shouldRemember={false} onChangeForm={(name: string) => mockLogin(name)} onHideModal={mockLogin} signIn={mockLogin}/>
    // </Provider>)

    it('renders properly', () => {
        expect(register).toMatchSnapshot()
    })

    it('render firm with disabled button at initial render', ()=>{
        expect(register.find('[type="button"]').prop('disabled')).toBeTruthy()
    })

    // it('render firm with disabled button at initial render', ()=>{
    //
    //     register.find('[type="password"]').simulate('change', {
    //         target: {
    //             name: 'password',
    //             value: password
    //         }
    //     })
    //     register.find('[type="email"]').simulate('change', {
    //         target: {
    //             name: 'email',
    //             value: email
    //         }
    //     })
    //     const useEffect = jest.spyOn(React, "useEffect").mockImplementation(f=>f())
    //     console.log(register.find('[type="email"]').prop('value'))
    //     console.log(register.find('[type="password"]').prop('value'))
    //     expect(register.find('Button').prop('disabled')).toBeFalsy()
    // })
    //
    // it('should set the password value on change event with trim', () => {
    //     register.find('[type="password"]').simulate('change', {
    //         target: {
    //             name: 'password',
    //             value: password,
    //         },
    //     });
    //     expect(register.find('[type="password"]').prop('value')).toEqual(
    //         password,
    //     );
    // });
    //
    // it('should set the email value on change event with trim', () => {
    //     register.find('[type="email"]').simulate('change', {
    //         target: {
    //             name: 'email',
    //             value: email,
    //         },
    //     });
    //     expect(register.find('[type="email"]').prop('value')).toEqual(
    //         email,
    //     );
    // });
    //
    // it('should set wrong email value', () => {
    //     register.find('[type="email"]').simulate('change', {
    //         target: {
    //             name: 'email',
    //             value: wrongEmail,
    //         },
    //     });
    //     expect(register.find('[type="email"]').prop('value')).toEqual(
    //         email,
    //     );
    // });
    // it('should set wrong password value', () => {
    //     register.find('[type="password"]').simulate('change', {
    //         target: {
    //             name: 'password',
    //             value: wrongPassword,
    //         },
    //     });
    //     expect(register.find('[type="password"]').prop('value')).toEqual(
    //         password,
    //     );
    // });

})