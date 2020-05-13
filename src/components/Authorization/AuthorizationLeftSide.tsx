import React from "react";
import {Grid} from "@material-ui/core";
import {GoogleButtonLogin} from "../Buttons/Auth/GoogleButtonLogin";

export function AuthorizationLeftSide(props: any) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
                <Grid item xs={3}>
                    <GoogleButtonLogin />
                </Grid>
            </Grid>
        </>
    )
}