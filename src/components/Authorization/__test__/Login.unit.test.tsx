import React, {Component} from "react";
import {AuthorizationLogin} from "../AuthorizationLogin"
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {shallow} from "enzyme";


describe('<AuthorizationLogin/>',  () => {
    const mockLogin = jest.fn()
    const password = '4TYE46E8RT!@qw'
    const name = 'login'
    const wrongPassword = '11'
    const email = 'vas@gmail.com'
    const wrongEmail = 'vascom'

    const login = shallow<Component>(<AuthorizationLogin shouldRemember={false} onChangeForm={(name: string) => mockLogin(name)} onHideModal={mockLogin} signIn={mockLogin}/>)

    it('renders properly', () => {
        expect(login).toMatchSnapshot()
    })

    it('render firm with disabled button at initial render', ()=>{
        expect(login.find('[type="submit"]').prop('disabled')).toBeTruthy()
    })

    // it('render firm with disabled button at initial render', ()=>{
    //
    //     login.find('[type="password"]').simulate('change', {
    //         target: {
    //             name: 'password',
    //             value: password
    //         }
    //     })
    //     login.find('[type="email"]').simulate('change', {
    //         target: {
    //             name: 'email',
    //             value: email
    //         }
    //     })
    //     console.log(login.find('[type="email"]').prop('value'))
    //     console.log(login.find('[type="password"]').prop('value'))
    //     expect(login.find('Button').prop('disabled')).toBeFalsy()
    // })

    it('should set the password value on change event with trim', () => {
        login.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password,
            },
        });
        expect(login.find('[type="password"]').prop('value')).toEqual(
            password,
        );
    });

    it('should set the email value on change event with trim', () => {
        login.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email,
            },
        });
        expect(login.find('[type="email"]').prop('value')).toEqual(
            email,
        );
    });
    //
    // it('should set wrong email value', () => {
    //     login.find('[type="email"]').simulate('change', {
    //         target: {
    //             name: 'email',
    //             value: wrongEmail,
    //         },
    //     });
    //     expect(login.find('[type="email"]').prop('value')).toEqual(
    //         email,
    //     );
    // });
    // it('should set wrong password value', () => {
    //     login.find('[type="password"]').simulate('change', {
    //         target: {
    //             name: 'password',
    //             value: wrongPassword,
    //         },
    //     });
    //     expect(login.find('[type="password"]').prop('value')).toEqual(
    //         password,
    //     );
    // });

})