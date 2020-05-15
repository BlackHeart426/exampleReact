import React from "react";
import {AuthorizationLogin, IProps} from "../components/Authorization/AuthorizationLogin"
import { render, fireEvent, waitForElement } from "@testing-library/react";


function renderAuthorizationLogin(props: Partial<IProps> = {}) {
    const defaultProps: any = {
        shouldRemember: true,
        onChangeForm() {
            return;
        },
        onHideModal() {
            return;
        },
    }
    return render(<AuthorizationLogin {...props} {...defaultProps}/>)
}

describe('<AuthorizationLogin/>',  () => {
    const mockLogin = jest.fn()
    const password = '4TYE46E8RT'
    const wrongPassword = '11'
    const email = 'vas@gmail.com'
    const wrongEmail = 'vascom'
    //
    // test('should display a blank login form, with remember me checked by default', async (assert) => {
    //     const { findByTestId } = renderAuthorizationLogin();
    //
    //     const loginForm = await findByTestId("login-form")
    //
    //     expect(loginForm).toHaveFormValues({
    //         email: "",
    //         password: "",
    //         remember: false
    //     })
    // });
    test("should allow entering a password", async () => {
        const onPasswordChange = jest.fn();
        const { findByTestId } = renderAuthorizationLogin();
        const username = await findByTestId("password");

        fireEvent.change(username, { target: { value: "password" } });

        expect(onPasswordChange).toHaveBeenCalledWith("password");
    });

    // const inputEmail = login.find('input[type="email"]')
    // const inputPassword = login.find('input[type="password"]')
    // const button = login.find('button')


    // test('should set the password value on change with trim', () => {
    //     inputPassword.simulate('change', {
    //         target: {
    //             value: password
    //         }
    //     })
    //     expect(inputPassword.prop('value')).toEqual(password)
    // })
})