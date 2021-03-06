import React, {useState} from "react";
import {CustomDialog} from "../../components/Dialog/CustomDialog";
import {Button} from "@material-ui/core";
import {AuthorizationForm} from "./AuthorizationForm";

export function AuthorizationModal(props: any) {
    const {login = false, register= false} = props
    const [dialogOpened, setDialogOpened] = useState(false);

    const data = {
        title: 'Authorization',
        content:
            <div>
                <AuthorizationForm form={login ? 'login' : 'signUp'}  onHideModal={() => handleClose()}/>
            </div>,
        action: ''
    }

    const handleOpen = (name: any) => {
        setDialogOpened(true)
    }

    const handleClose = () => {
        setDialogOpened(false)
    }

    return (
        <>
            {register && <Button
                onClick={() => handleOpen('register')}
                type="submit"
                variant="outlined"
            >
                <strong>Register</strong>
            </Button>}

            {login &&
            <Button
                onClick={() => handleOpen('login')}
                type="submit"
                color="primary"
                variant="contained"
            >
                Login
            </Button>
            }
            <CustomDialog size={'md'} extendData={false} data={data} show={dialogOpened}  onHide={() => setDialogOpened(false) }/>
        </>
    )
}