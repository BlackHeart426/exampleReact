import React from "react";
import {Grid, Divider, Box, Hidden} from "@material-ui/core";
import { AuthorizationRightSide } from "./AuthorizationRightSide";
import { AuthorizationLeftSide } from "./AuthorizationLeftSide";
import {useStyles} from "./style";


export function AuthorizationForm(props: any) {
    const classes = useStyles()
    const {onHideModal, form} = props;

    return (
        <Grid className={classes.rootForm} container alignItems="center">
            <div className={classes.leftSide} >
                <div style={{padding:10}}>
                    <AuthorizationLeftSide onHideModal={onHideModal}/>
                </div>
            </div>
            <div style={{flexGrow: 1}}></div>
            <Hidden xsDown><Divider orientation="vertical" flexItem /></Hidden>
            <div style={{flexGrow: 1}}></div>
            <div className={classes.rightSide}>
                <AuthorizationRightSide form={form} onHideModal={onHideModal}/>
            </div>
        </Grid>


    )
}