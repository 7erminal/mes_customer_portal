import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import SecondaryButton from "./widgets/SecondaryButton";

const CreateCampaign: React.FC = ()=>{
    return <div className="create-campaign">
        <Row className="my-4">
            <Col xs={12} md={12} className="my-2">
                <b>Select delivery method</b>
            </Col>
            <Col>
                <Form.Check // prettier-ignore
                    type="checkbox"
                    id="checkbox"
                    label="SMS"
                />
            </Col>
            <Col>
                <Form.Check // prettier-ignore
                    type="checkbox"
                    id="checkbox"
                    label="Email"
                />
            </Col>
        </Row>
        <Form>
            <FloatingLabel
                controlId="floatingInputDob"
                label="Campaign name"
                className="mb-3"
                style={{backgroundColor: '#F0FBFF'}}
            >
                <Form.Control type="text" placeholder="Campaign name" className="custom-input-login-r" required/>
            </FloatingLabel>
            <Form.Control as="textarea" rows={4} placeholder="Message" className="custom-input-login-r" required/>
            <div className="my-4"></div>
            <SecondaryButton title="Schedule" type="button" navigateTo={()=>{}} />
        </Form>
    </div>
}

export default CreateCampaign