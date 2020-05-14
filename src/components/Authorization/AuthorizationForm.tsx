import React from "react";
import { AuthorizationRightSide } from "./AuthorizationRightSide";
import { AuthorizationLeftSide } from "./AuthorizationLeftSide";
import {Col, Container, Row} from "react-bootstrap";

export function AuthorizationForm(props: any) {
    const {onHideModal, form} = props;
    return (
        <Container>
            <Row >
                <Col >
                    <div style={{padding:10 }}>
                        <AuthorizationLeftSide onHideModal={onHideModal}/>
                    </div>
                </Col>
                <Col >
                    <div style={{paddingRight:30, paddingLeft:30, borderLeft: '1px solid #c6c6c6', width: 440}}>
                        <AuthorizationRightSide form={form} onHideModal={onHideModal}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}