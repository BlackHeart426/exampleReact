import React, {ChangeEvent, useEffect, useState} from "react";
import {validateForm} from "../../components/validateForm/validateForm";
import {AnyAction, bindActionCreators, Dispatch} from "redux";
// import {authorizationActionCreator, authorizationGoogleActionCreator} from "../../store/action/authorization";
import {connect} from "react-redux";
import {Form, Button, Container, Col, Row} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import IStoreState from "../../store/IStoreState";
import {signIn} from "../../api/authenticationApi";
import { signInActionCreator } from "../../actions/authentiocation/interfaceAuthentication/authenticationActions";

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
    shouldRemember: boolean

}

export interface IAuthorizationLoginProps {
    signIn: (email: string, password: string) => (dispatch: Dispatch<AnyAction>) => Promise<void>
    shouldRemember: boolean;
    onChangeForm: (change: string) => void;
    onHideModal: () => void;
}

export const AuthorizationLogin: React.FC<IAuthorizationLoginProps> = ({
     onChangeForm, onHideModal, shouldRemember
 }) => {

    const initialState: IState = {
        email: {
            status: false,
            message: '',
            value: ''
        },
        password: {
            status: false,
            message: '',
            value: '1'
        },
        shouldRemember: false
    }

    const [state, setState] = useState<IState>(initialState)
    const [password, setPassword] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorForm, setError] = useState(initialState);

    const handleLogin = () => {
        console.log(state.password.value)
        // props.action.authorization(state.email.value, state.password.value)
        handleClose()
    };

    const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setState({...state, shouldRemember: checked});
        // props.onRememberChange(checked);
    };


    const handleClose = () => {
        onHideModal()
        setDialogOpened(false)
    };

    useEffect(()=>{
        setState({...state, shouldRemember: shouldRemember})
    },[])

    useEffect(() => {
        if (state.email.value.trim() && state.password.value.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state]);

    useEffect(() => {
        if (state.email.value.trim() && state.password.value.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, []);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, cb: any) => {
        const {name, value} = e.target;
        const infoValid = validateForm(name, value)
        setError({...errorForm, [name]: {status: infoValid.error, message: infoValid.errorMessage}});
        return cb
    }

    const handl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (

        <Form data-testid="login-form">
            <div>{state.password.value}</div>
            <div style={{textAlign: "center"}}>
                <strong>Login</strong>
            </div>
            <TextField
                error={errorForm.email.status}
                helperText={errorForm.email.message}
                variant="outlined"
                fullWidth
                id="email"
                autoFocus
                name="email"
                type="email"
                size={"small"}
                label="Email"
                placeholder="Email"
                margin="normal"
                value={state.email.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, email: {value: e.target.value, message: '', status: false}}))}
                onKeyPress={(e)=>handleKeyPress(e)}
            />
            <Form.Group controlId="formLogin">
                <br />
                <Form.Label>Password</Form.Label>
                <Form.Control
                    data-testid="password"
                    name="password"
                    type="password"
                    value={state.password.value}
                    placeholder="Password"
                    // onChange={handl}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, password: {value: e.target.value, message: '', status: false}}))}
                    // onKeyPress={(e)=>handleKeyPress(e)}
                />
            </Form.Group>
            <Form.Check
                data-testid="remember"
                name="remember"
                type="checkbox"
                onChange={handleRememberChange}
                checked={state.shouldRemember}
                id={`default-checkbox`}
                // onClick={handleChange}
                label={`Remember me`}
            />
            <Button
                type="submit"
                block
                variant={"primary"}
                onClick={handleLogin}
                disabled={isButtonDisabled}
            >
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
    )
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
    return {
        signIn: bindActionCreators((email, password) => signInActionCreator(email, password), dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AuthorizationLogin)