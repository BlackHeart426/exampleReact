import React, {useEffect, useState} from "react";
import {validateForm} from "../../components/validateForm/validateForm";
import {connect} from "react-redux";
import {Button, Container, Form, Row} from "react-bootstrap";


export interface IState {
    email: {
        status: boolean,
        message: string,
        value: string
    }
}

export function AuthorizationRecoveryPassword(props: any) {
    const {onChangeForm, onHideModal} = props;
    const initialState: IState = {
        email: {
            status: false,
            message: '',
            value: ''
        },
    }
    const [state, setState] = useState<IState>(initialState)
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [errorForm, setError] = useState(initialState);

    const handleSendEmail = () => {
        // const dataUser = {
        //     email
        // }
        // props.action.resetPassword(email)
        // setAlertSuccess(true)
    };

    // useEffect(() => {
    //     if (errorForm.email.status === false
    //         && email.trim()){
    //         setIsButtonDisabled(false);
    //     } else {
    //         setIsButtonDisabled(true);
    //     }
    // }, [email]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleSendEmail();
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
                {/*{alertSuccess*/}
                {/*&& <Alert onClose={() => {}}>На вашу почту отправлено письмо для восстановления пароля</Alert>*/}
                {/*}*/}
                <div style={{textAlign: "center"}}>
                    <strong>Recovery password</strong>
                </div>
                <Form.Group controlId="formRecovery">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        data-testid="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e, setState({...state, email: {value: e.target.value, message: '', status: false}}))}
                        onKeyPress={(e: any)=>handleKeyPress(e)}/>
                </Form.Group>
                <Button
                    type="submit"
                    block
                    variant={"primary"}
                    onClick={handleSendEmail}
                    disabled={isButtonDisabled}>
                    Recovery
                </Button>
                <Container>
                    <Row  >
                        <a href="#" onClick={() => onChangeForm('login')}  >
                            Login
                        </a>
                        <a  href="#" onClick={() => onChangeForm('signUp')}>
                            Sign Up
                        </a>
                    </Row>
                </Container>
            </Form>
        </>
    )
}
//
//
// function mapDispatchToProps(dispatch: any) {
//     return {
//         action: {
//             // resetPassword: (email: string) => dispatch(resetPasswordActionCreator(email)),
//         }
//     }
// }
//
// export default connect(null, mapDispatchToProps)(AuthorizationRecoveryPassword)