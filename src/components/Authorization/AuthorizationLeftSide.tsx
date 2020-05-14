import React from "react";
import {GoogleButtonLogin} from "../Buttons/Auth/GoogleButtonLogin";
import {Container, Row} from "react-bootstrap";

export function AuthorizationLeftSide(props: any) {
    return (
        <Container>
            <div style={{paddingTop: 20}}>
                <Row>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>


                </Row>
            </div>
            <div style={{paddingTop: 20}}>
                <Row>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                    <div style={{paddingRight: 15, paddingLeft: 15}}>
                        <GoogleButtonLogin />
                    </div>
                </Row>
            </div>
        </Container>
    )
}