import React, {ChangeEvent, useEffect, useState} from "react";
import {validateForm} from "../../components/validateForm/validateForm";
// import {authorizationActionCreator} from "../../store/action/authorization";
import {connect} from "react-redux";
import {
    FormControl,
    Grid,
    IconButton,
    Link,
    InputAdornment,
    TextField,
    createStyles,
    Theme,
    Typography,
    Button
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

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
    //     if(state.password.value === state.passwordRepeat.value) {
    //         setState({...state, passwordRepeat: {status: false, message: '', value: state.passwordRepeat.value}});
    //     } else {
    //         setState({...state, passwordRepeat: {status: true, message: 'Password do not match', value: state.passwordRepeat.value}});
    //     }
    // },[state.passwordRepeat, state.password])

    const validateFormSignUp = () => {

    }

    useEffect(() => {
        const {username, email, password, passwordRepeat} = state
        let passwordError;
        if (!errorForm.email.status
            && !errorForm.password.status
            && !passwordError
            && !errorForm.username.status
            && !errorForm.email.status
            && username.value.trim()
            && email.value.trim()
            && password.value.trim()
            && passwordRepeat.value.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state]);

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
            <div>
                <Typography align={"center"}>
                    <strong>Sign Up</strong>
                </Typography>
                <TextField
                    className={classes.contentText}
                    error={errorForm.username.status}
                    helperText={errorForm.username.message}
                    fullWidth
                    variant="outlined"
                    id="username"
                    type="text"
                    size={"small"}
                    name="username"
                    label="Username"
                    placeholder="Username"
                    margin="normal"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, username: {value: e.target.value, message: '', status: false}}))}
                    onKeyPress={(e)=>handleKeyPress(e)}
                />
                <TextField
                    className={classes.contentText}
                    error={errorForm.email.status}
                    helperText={errorForm.email.message}
                    fullWidth
                    variant="outlined"
                    id="email"
                    type="email"
                    name="email"
                    size={"small"}
                    label="Email"
                    placeholder="Email"
                    margin="normal"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, email: {value: e.target.value, message: '', status: false}}))}
                    onKeyPress={(e)=>handleKeyPress(e)}
                />
                <TextField
                    className={classes.contentText}
                    error={errorForm.password.status}
                    helperText={errorForm.password.message}
                    fullWidth
                    variant="outlined"
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                size={"small"}
                                edge="end"
                            >
                                {passwordVisible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>,
                    }}
                    size={"small"}
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, password: {value: e.target.value, message: '', status: false}}))}

                    onKeyPress={(e)=>handleKeyPress(e)}
                />
                <TextField
                    className={classes.contentText}
                    style={{marginTop: '8px'}}
                    error={errorForm.passwordRepeat.status}
                    helperText={errorForm.passwordRepeat.message}
                    fullWidth
                    size={"small"}
                    variant="outlined"
                    id="passwordRepeat"
                    type={passwordVisible ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                size={"small"}
                                edge="end"
                            >
                                {passwordVisible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>,
                    }}
                    name="passwordRepeat"
                    label="Password Repeat"
                    placeholder="Repeat Password"
                    margin="normal"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, setState({...state, passwordRepeat: {value: e.target.value, message: '', status: false}}))}
                    onKeyPress={(e)=>handleKeyPress(e)}
                />
                <FormControl fullWidth className={classes.action}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="button"
                        // className={classes.signUpBtn}
                        onClick={handleSignUp}
                        disabled={isButtonDisabled}>
                        Sign Up
                    </Button>
                </FormControl>
                <Grid container >
                    <Grid item xs >
                        <Link href="#" onClick={() => onChangeForm('recovery')} variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" onClick={() => onChangeForm('login')} variant="body2">
                            {"Login"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
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