import React, {useEffect, useState} from "react";
import {validateForm} from "../../components/validateForm/validateForm";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// import {authorizationActionCreator} from "../../store/action/authorization";
import {connect} from "react-redux";
import {Form, Button, Container, Row} from "react-bootstrap";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            action: {
                marginTop: '10px',
            },
            contentText: {
                marginTop: '8px'
            }

        }
    )
)

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
     passwordRepeat: {
         status: boolean,
         message: string,
         value: string
     },
     username: {
         status: boolean,
         message: string,
         value: string
     },
 }

export function AuthorizationSignUp(props: any) {
    const classes = useStyles()
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
        passwordRepeat: {
            status: false,
            message: '',
            value: ''
        },
        username: {
            status: false,
            message: '',
            value: ''
        },
    }

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [dialogOpened, setDialogOpened] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [errorForm, setError] = useState(initialState);
    const [state, setState] = useState<IState>(initialState)

    // useEffect(()=>{
    //     debugger
    //     if(password === passwordRepeat) {
    //         setError({...errorForm, passwordRepeat: {status: false, message: ''}});
    //     } else {
    //         setError({...errorForm, passwordRepeat: {status: true, message: 'Password do not match'}});
    //     }
    // },[passwordRepeat, password])

    // useEffect(() => {
    //     let passwordError;
    //     if(password === passwordRepeat) {
    //         setError({...errorForm, passwordRepeat: {status: false, message: ''}});
    //         passwordError = false
    //     } else {
    //         setError({...errorForm, passwordRepeat: {status: true, message: 'Password do not match'}});
    //         passwordError = true
    //     }
    //     if (!errorForm.email.status
    //         && !errorForm.password.status
    //         && !passwordError
    //         && !errorForm.username.status
    //         && !errorForm.email.status
    //         && username.trim()
    //         && email.trim()
    //         && password.trim()
    //         && passwordRepeat.trim()) {
    //         setIsButtonDisabled(false);
    //     } else {
    //         setIsButtonDisabled(true);
    //     }
    // }, [username, password, email, passwordRepeat]);

    const handleSignUp = () => {
        // props.action.authorization(email, password)
        handleClose()
    };

    const handleClose = () => {
        onHideModal()
        setDialogOpened(false)
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleSignUp();
        }
    };

    const handleClickShowPassword = () => {
        setPasswordVisible(!passwordVisible);
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
                    <strong>Sign Up</strong>
                </div>
                <Form.Group controlId="formSignUp">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        onChange={(e) => handleChange(e, setState({...state, username: {value: e.target.value, message: '', status: false}}))}
                        onKeyPress={(e: any)=>handleKeyPress(e)}/>
                    <br />
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
                    <br />
                    <Form.Label>Password Repeat</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password Repeat"
                        onChange={(e) => handleChange(e, setState({...state, passwordRepeat: {value: e.target.value, message: '', status: false}}))}
                        onKeyPress={(e: any)=>handleKeyPress(e)}/>
                </Form.Group>
                <Button
                    type="submit"
                    block
                    variant={"primary"}
                    onClick={handleSignUp}
                    disabled={isButtonDisabled}>
                    Sign Up
                </Button>
                <Container>
                    <Row  >
                        <a href="#" onClick={() => onChangeForm('recovery')}  >
                            Forgot password?
                        </a>
                        <a href="#" onClick={() => onChangeForm('login')}>
                            Login
                        </a>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

//
// function mapDispatchToProps(dispatch: any) {
//     return {
//         action: {
//             // authorization: (email: string, password: string) => dispatch(authorizationActionCreator(email, password, false)),
//         }
//     }
// }
//
// export default connect(null, mapDispatchToProps)(AuthorizationSignUp)