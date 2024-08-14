import React, { useContext } from "react";
import { Col, FloatingLabel, ProgressBar, Row, Form } from "react-bootstrap";
import InvertedPrimaryButton from "../../components/widgets/InvertedPrimaryButton";
import ApplicationContext from "../../resources/ApplicationContext.js";
// @ts-ignore
import Api from "../../apis/apis"
// @ts-ignore
import { ROUTES } from "../../apis/endpoints.js"
import NotificationModal from "../../components/widgets/NotificationModal.js";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)

    const navigate = useNavigate()

    const handleSuccessMessageClose = ()=>{
        navigate("/login")
    }

    const handleErrorMessageClose = ()=>{
        applicationContext?.setErrorMessage("")
        applicationContext?.setShowErrorMessage(false)
    }

    const login = async (e: React.FormEvent<HTMLFormElement>)=>{
        const resp = await applicationContext?.login(e)

        if(resp==true){
            navigate('/')
        }
    }

    return <div className="body">
        {/* <Container style={{width: '100%', height: '100%'}}> */}
            <Row style={{width: '100%', height: '100%'}}>
                <Col xs={12} md={6} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <h1>MES</h1>
                    <small>Technology Limited Company</small>
                    <br/>
                    <h3>Welcome back</h3>
                    <div className="sign-up-text">New to MES? <a className="default-heading-text" href="/sign-up">Sign Up</a></div>
                    <br/>
                    <div className="login-form-section">
                        <ProgressBar className="my-progress-bar" now={20} />
                        <Form className="my-4" onSubmit={(e)=>login(e)}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control type="text" value={applicationContext!.username} onChange={(e)=>applicationContext?.setUsername(e.target.value)} placeholder="Username" className="custom-input-login-r" required />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control type="password" value={applicationContext!.password} onChange={(e)=>applicationContext?.setPassword(e.target.value)} placeholder="Password" className="custom-input-login-r" required />
                            </FloatingLabel>
                            <div style={{width: '100%', alignItems: 'stretch', display: 'flex', flexDirection: 'column'}}><InvertedPrimaryButton type="submit" title="Sign In" /></div>
                        </Form>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: '#F6F6F6' }}>
                </Col>
            </Row>
        {/* </Container> */}
        {/* Success Message */}
        <NotificationModal title="Success" titleColor="#2895FC" message={applicationContext!.successMessage} show={applicationContext!.showSuccessMessage} buttonText="OK" navigateTo={handleSuccessMessageClose} />
        {/* Error Message */}
        <NotificationModal title="Error" titleColor="#EC7063" message={applicationContext!.errorMessage} show={applicationContext!.showErrorMessage} buttonText="OK" navigateTo={handleErrorMessageClose} />
    </div>
}

export default LoginPage