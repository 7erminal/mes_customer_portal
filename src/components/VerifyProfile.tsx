import React, { useContext } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
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

const VerifyProfile: React.FC<Props> = ({show, handleClose, proceed})=>{
    const applicationContext = useContext(ApplicationContext)

    const continueP = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        proceed(1)
    }

    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>MES TECH</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h2>COMPLETE REGISTRATION</h2>
        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>continueP(e)}>
            <Row>
                First upload your ID
            </Row>
            <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="file" size="lg" className="custom-input-login-r" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>applicationContext!.setUserIdFile!(e.target.files![0])} required/>
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

export default VerifyProfile