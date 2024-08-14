import React, { useContext, useState } from "react";
import { FloatingLabel, Modal, Form, Row, Col } from "react-bootstrap";
import ApplicationContext from "../resources/ApplicationContext.js";
import InvertedPrimaryButton from "./widgets/InvertedPrimaryButton.js";
import NotificationModal from "./widgets/NotificationModal.js";
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

type Props = {
    show: boolean
    handleClose: ()=>void
}

const VerifyProfile: React.FC<Props> = ({show, handleClose})=>{
    const applicationContext = useContext(ApplicationContext)
    const [companyName, setCompanyName] = useState('')
    const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('')
    const [natureOfbusiness, setNatureOfBusiness] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [postalAddress, setPostalAddress] = useState(applicationContext!.user?.Address)
    const [phoneNumber, setPhoneNumber] = useState(applicationContext!.user?.PhoneNumber)
    const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('')
    // const [username, setUsername] = useState(applicationContext!.user?.Username)

    const handleSuccessMessageClose = ()=>{
        applicationContext?.setSuccessMessage("")
        applicationContext?.setShowSuccessMessage(false)
        setCompanyName('')
        setBusinessRegistrationNumber('')
        setNatureOfBusiness('')
        setStreetAddress('')
        setPostalAddress('')
        setPhoneNumber('')
        setAlternatePhoneNumber('')
        handleClose()
    }

    const handleErrorMessageClose = ()=>{
        applicationContext?.setErrorMessage("")
        applicationContext?.setShowErrorMessage(false)
    }

    const register = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const params = {
            'userid': applicationContext?.user?.UserId,
            'companyName': companyName,
            'businessRegistrationNumber': businessRegistrationNumber,
            'natureOfBusiness': natureOfbusiness,
            'phoneNumber': phoneNumber,
            'streetAddress': streetAddress,
            'postalAddress': postalAddress,
            'alternatePhoneNumber': alternatePhoneNumber
        }

        applicationContext?.setLoading(true)
  
        await new Api().post_(params, ROUTES.onboard).then((response: any)=>{
            applicationContext?.setLoading(false)
            console.log("Response is ...")
            console.log(response)
            if(response.status==200){
                console.log("RESPONSE::: ")
                console.log(response.data)
                if(response.data.StatusCode == 200){
                    console.log("Success!")
                    applicationContext?.setSuccessMessage(response.data.StatusDesc)
                    applicationContext?.setShowSuccessMessage(true);
                }
            } else {
                applicationContext?.setErrorMessage(response.data.StatusDesc)
                applicationContext?.setShowErrorMessage(true)
            }
          }).catch((error: any)=> {
            applicationContext?.setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            applicationContext?.setErrorMessage("Sorry...something went wrong. Please try again")
            applicationContext?.setShowErrorMessage(true)
          })
    }

    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>MES TECH</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h2>COMPLETE REGISTRATION</h2>
        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>register(e)}>
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
                        label="Company name"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Company name" className="custom-input-login-r" required />
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
                    <Form.Control type="text" value={businessRegistrationNumber} onChange={(e)=>setBusinessRegistrationNumber(e.target.value)} placeholder="Business registration number" className="custom-input-login-r" required />
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
                    <Form.Control type="text" value={natureOfbusiness} onChange={(e)=>setNatureOfBusiness(e.target.value)} placeholder="Nature of business" className="custom-input-login-r" required />
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
                    <Form.Control type="text" value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} placeholder="Street address" className="custom-input-login-r" required />
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
                    <Form.Control type="text" value={postalAddress} onChange={(e)=>setPostalAddress(e.target.value)} placeholder="Postal address" className="custom-input-login-r" required />
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
                    <Form.Control type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone number" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
                <Col xs={12} md={6}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Alternate phone number"
                        className="mb-3"
                        >   
                    <Form.Control type="text" value={alternatePhoneNumber} onChange={(e)=>setAlternatePhoneNumber(e.target.value)} placeholder="Alternate phone number" className="custom-input-login-r" required />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="termsAndConditions"
                        label="Accept Terms and Conditions"
                        required
                    />

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="privacyPolicy"
                        label="Accept Privacy Policy"
                        required
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs={12} md={12}>
                    <InvertedPrimaryButton type="submit" title="Register" />
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    {/* Success Message */}
    <NotificationModal title="Success" titleColor="#2895FC" message={applicationContext!.successMessage} show={applicationContext!.showSuccessMessage} buttonText="OK" navigateTo={handleSuccessMessageClose} />
        {/* Error Message */}
    <NotificationModal title="Error" titleColor="#EC7063" message={applicationContext!.errorMessage} show={applicationContext!.showErrorMessage} buttonText="OK" navigateTo={handleErrorMessageClose} />
  </Modal>
}

export default VerifyProfile