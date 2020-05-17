import React, {Component} from "react";
import {AuthorizationLogin} from "../AuthorizationLogin"
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {shallow, ShallowWrapper} from "enzyme";


describe('<AuthorizationLogin/>', () => {
    const mockLogin = jest.fn()
    const password = '4TYE46E8RT!@qw'
    const name = 'login'
    const wrongPassword = '11'
    const email = 'vas@gmail.com'
    const wrongEmail = 'vascom'

    let wrapper: ShallowWrapper<Readonly<{}> & Readonly<{ children?: React.ReactNode; }>, Readonly<{}>, React.Component<{}, {}, any>>;
    let useEffect: { mockImplementationOnce: (arg0: (f: any) => any) => void; };

    let mockUseEffect = () => {
        useEffect.mockImplementationOnce(f=>f())
    }

    beforeEach(()=>{
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();
        wrapper = shallow<Component>(<AuthorizationLogin shouldRemember={false} onChangeForm={(name: string) => mockLogin(name)} onHideModal={mockLogin} signIn={mockLogin}/>)
    })

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('render firm with disabled button at initial render', ()=>{
        expect(wrapper.find('[type="submit"]').prop('disabled')).toBeTruthy()
    })

    it('render firm with disabled button at initial render', ()=>{

        wrapper.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password
            }
        })
        wrapper.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email
            }
        })
        console.log(wrapper.find('[type="email"]').prop('value'))
        console.log(wrapper.find('[type="password"]').prop('value'))

        expect(wrapper.find('Button').prop('disabled')).toBeFalsy()
    })

    it('should set the password value on change event with trim', () => {
        wrapper.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password,
            },
        });
        expect(wrapper.find('[type="password"]').prop('value')).toEqual(
            password,
        );
    });

    it('should set the email value on change event with trim', () => {
        wrapper.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email,
            },
        });
        expect(wrapper.find('[type="email"]').prop('value')).toEqual(
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