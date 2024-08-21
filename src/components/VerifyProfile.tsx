import React, { useContext, useEffect, useState } from "react";
import { FloatingLabel, Modal, Form, Row, Col } from "react-bootstrap";
import ApplicationContext from "../resources/ApplicationContext";
import InvertedPrimaryButton from "./widgets/InvertedPrimaryButton";
import NotificationModal from "./widgets/NotificationModal";
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints"
import VerifyProfile2 from "./VerifyProfile2";

type Props = {
    show: boolean
    handleClose: ()=>void
    proceed: (page: number)=>void
}

const VerifyProfile: React.FC<Props> = ({show, handleClose, proceed})=>{
    const applicationContext = useContext(ApplicationContext)

    // const [username, setUsername] = useState(applicationContext!.user?.Username)

    const continueP = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        proceed(2)
    }

    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>MES TECH</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h2>COMPLETE REGISTRATION</h2>
        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>continueP(e)}>
            {/* <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                        >   
                    <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row> */}
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Business name"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.companyName} onChange={(e)=>applicationContext?.setCompanyName(e.target.value)} placeholder="Business name" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Business registration number"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.businessRegistrationNumber} onChange={(e)=>applicationContext?.setBusinessRegistrationNumber(e.target.value)} placeholder="Business registration number" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nature of business"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.natureOfbusiness} onChange={(e)=>applicationContext?.setNatureOfBusiness(e.target.value)} placeholder="Nature of business" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Street address"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.streetAddress} onChange={(e)=>applicationContext?.setStreetAddress(e.target.value)} placeholder="Street address" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Postal address"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.postalAddress} onChange={(e)=>applicationContext?.setPostalAddress(e.target.value)} placeholder="Postal address" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone number"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.rphoneNumber} onChange={(e)=>applicationContext?.setRphoneNumber(e.target.value)} placeholder="Phone number" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
                <Col xs={12} md={6}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Alternate phone number"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={applicationContext?.alternatePhoneNumber} onChange={(e)=>applicationContext?.setAlternatePhoneNumber(e.target.value)} placeholder="Alternate phone number" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs={12} md={12}>
                    <InvertedPrimaryButton type="submit" title="Continue" />
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    {/* Success Message */}
  </Modal>
}

export default VerifyProfile