import React, { useContext } from "react";
import { FloatingLabel, Modal, Form, Row, Col } from "react-bootstrap";
import ApplicationContext from "../resources/ApplicationContext";
import InvertedPrimaryButton from "./widgets/InvertedPrimaryButton";
// @ts-ignore
import Api from "../apis/apis.js"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

type Props = {
    show: boolean
    handleClose: ()=>void
    proceed: (page: number)=>void
}

const VerifyProfile2: React.FC<Props> = ({show, handleClose, proceed})=>{
    const applicationContext = useContext(ApplicationContext)

    const continueP = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        proceed(3)
    }

    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>MES TECH</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h2>COMPLETE REGISTRATION</h2>
        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>continueP(e)}>
            <Row>
                <Col xs={12} md={12}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Number of directors"
                        className="mb-3"
                        >   
                    <Form.Control type="number" value={applicationContext?.numberOfDirectors} onChange={(e)=>applicationContext?.setNumberOfDirectors(e.target.value)} placeholder="Number of directors" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>IDs of all directors (Ghana Card / Passport)</Form.Label>
                    <Form.Control type="file" size="lg" className="custom-input-login-r" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>applicationContext!.setDirectorIDs!(e.target.files)} multiple required/>
                </Form.Group>
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

export default VerifyProfile2