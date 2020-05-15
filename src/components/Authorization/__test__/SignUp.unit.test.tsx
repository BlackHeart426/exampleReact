import React, {Component, useEffect} from "react";
import {AuthorizationLogin, IProps} from "../AuthorizationLogin"
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {shallow} from "enzyme";


describe('<AuthorizationLogin/>',  () => {
    const mockLogin = jest.fn()
    const password = '4TYE46E8RT!@qw'
    const name = 'register'
    const wrongPassword = '11'
    const email = 'vas@gmail.com'
    const wrongEmail = 'vascom'

    const register = shallow<Component>(<AuthorizationLogin shouldRemember={false} onChangeForm={(name: string) => mockLogin(name)} onHideModal={mockLogin}/>)

    it('renders properly', () => {
        expect(register).toMatchSnapshot()
    })

    it('render firm with disabled button at initial render', ()=>{
        console.log(register.find('Button').debug())
        expect(register.find('Button').prop('disabled')).toBeTruthy()
    })

    it('render firm with disabled button at initial render', ()=>{

        register.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password
            }
        })
        register.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email
            }
        })
        const useEffect = jest.spyOn(React, "useEffect").mockImplementation(f=>f())
        console.log(register.find('[type="email"]').prop('value'))
        console.log(register.find('[type="password"]').prop('value'))
        expect(register.find('Button').prop('disabled')).toBeFalsy()
    })

    it('should set the password value on change event with trim', () => {
        register.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password,
            },
        });
        expect(register.find('[type="password"]').prop('value')).toEqual(
            password,
        );
    });

    it('should set the email value on change event with trim', () => {
        register.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email,
            },
        });
        expect(register.find('[type="email"]').prop('value')).toEqual(
            email,
        );
    });
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