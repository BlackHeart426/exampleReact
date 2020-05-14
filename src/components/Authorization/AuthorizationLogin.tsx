import React, {useEffect, useState} from "react";
import {validateForm} from "../../components/validateForm/validateForm";
// import {authorizationActionCreator, authorizationGoogleActionCreator} from "../../store/action/authorization";
import {connect} from "react-redux";
import {Form, Button, Container, Col, Row} from "react-bootstrap";

export interface IState {
    email: {
        status: boolean,
        message: string,
        value: string
    },
    password: {
        status: boolean,
        message: string,
        value: string
    },
}

export function AuthorizationLogin(props: any) {
    const {onChangeForm, onHideModal} = props;

    const initialState: IState = {
        email: {
            status: false,
            message: '',
            value: ''
        },
        password: {
            status: false,
            message: '',
            value: ''
        },
    }

    const [state, setState] = useState<IState>(initialState)
    const [dialogOpened, setDialogOpened] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorForm, setError] = useState(initialState);

    const handleLogin = () => {
        // props.action.authorization(state.email.value, state.password.value)
        handleClose()
    };

    const handleClose = () => {
        onHideModal()
        setDialogOpened(false)
    };

    // useEffect(() => {
    //     if (!errorForm.email.status
    //         && !errorForm.password.status
    //         && email.trim() && password.trim()) {
    //         setIsButtonDisabled(false);
    //     } else {
    //         setIsButtonDisabled(true);
    //     }
    // }, [email, password]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    const handleChange = (e: any, cb: any) => {
        const {name, value} = e.currentTarget;
        const infoValid = validateForm(name, value)
        setError({...errorForm, [name]: {status: infoValid.error, message: infoValid.errorMessage}});
        return cb
    }
    return (
        <>
            <Form>
                <div style={{textAlign: "center"}}>
                    <strong>Login</strong>
                </div>
                <Form.Group controlId="formLogin">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e, setState({...state, email: {value: e.target.value, message: '', status: false}}))}
                        onKeyPress={(e: any)=>handleKeyPress(e)}/>
                    <br />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => handleChange(e, setState({...state, password: {value: e.target.value, message: '', status: false}}))}
                        onKeyPress={(e: any)=>handleKeyPress(e)}/>
                </Form.Group>
                <Form.Check
                    type={"checkbox"}
                    id={`default-checkbox`}
                    // onClick={handleChange}
                    label={`Remember me`}
                />
                <Button
                    type="submit"
                    block
                    variant={"primary"}
                    onClick={handleLogin}
                    disabled={isButtonDisabled}>
                    LOGIN
                </Button>
                <Container>
                    <Row  >
                        <a href="#" onClick={() => onChangeForm('recovery')}  >
                            Forgot password?
                        </a>
                        <a href="#" onClick={() => onChangeForm('signUp')}>
                            Don't have an account? Sign Up
                        </a>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

// function mapDispatchToProps(dispatch: any) {
//     return {
//         action: {
//             // authorization: (email: string, password: string) => dispatch(authorizationActionCreator(email, password, true)),
//         }
//     }
// }
//
// export default connect(null, mapDispatchToProps)(AuthorizationLogin)