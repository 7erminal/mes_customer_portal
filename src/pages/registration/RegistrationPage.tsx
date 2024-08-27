import React, { useContext, useEffect } from "react";
import { Col, FloatingLabel, ProgressBar, Row, Form } from "react-bootstrap";
import InvertedPrimaryButton from "../../components/widgets/InvertedPrimaryButton";
import ApplicationContext from "../../resources/ApplicationContext.js";
// @ts-ignore
import Api from "../../apis/apis"
// @ts-ignore
import { ROUTES } from "../../apis/endpoints.js"
import { useNavigate } from "react-router-dom";

const RegistrationPage: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    
    const navigate = useNavigate()

    let genders = ['male', 'female']

    const shuffle = (arr: Array<string>) =>{
        var j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    useEffect(()=>{
        genders = shuffle(genders)
        applicationContext?.setGender(genders[0])
        console.log("New genders")
        console.log(genders)
    },[])

    const register = async (e: React.FormEvent<HTMLFormElement>)=>{
        const resp = await applicationContext?.registerUser(e)

        if(resp==true){
            navigate('/login')
        }
    }
    
    return <div className="body">
        {/* <Container style={{width: '100%', height: '100%'}}> */}
            <Row style={{width: '100%', height: '100%'}}>
                <Col xs={12} md={6} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <h1>MES</h1>
                    <small>Technology Limited Company</small>
                    <br/>
                    <h3>Create new user account</h3>
                    <div className="sign-up-text">Already a member? <a className="default-heading-text" href="/login">Sign in</a></div>
                    <br/>
                    <div className="login-form-section">
                        <ProgressBar className="my-progress-bar" now={20} />
                        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>register(e)}>
                            <FloatingLabel
                                controlId="floatingInputFullname"
                                label="Full name"
                                className="mb-3"
                            >
                                <Form.Control type="text" value={applicationContext?.fullname} onChange={(e)=>applicationContext?.setFullname(e.target.value)} placeholder="Full name" className="custom-input-login-r" required/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="text" value={applicationContext?.email} onChange={(e)=>applicationContext?.setEmail(e.target.value)} placeholder="Email" className="custom-input-login-r" required/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputPhoneNumber"
                                label="Phone number"
                                className="mb-3"
                            >
                                <Form.Control type="text" value={applicationContext?.phoneNumber} onChange={(e)=>applicationContext?.setPhoneNumber(e.target.value)} placeholder="Phone number" className="custom-input-login-r" required/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputDob"
                                label="Date of birth"
                                className="mb-3"
                                style={{backgroundColor: '#F0FBFF'}}
                            >
                                <Form.Control type="date" value={applicationContext?.dob} onChange={(e)=>applicationContext?.setDob(e.target.value)} placeholder="Date of birth" className="custom-input-login-r" required/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Gender"
                                className="mb-3"
                            >
                            <Form.Select value={applicationContext?.gender} onChange={(e)=>applicationContext?.setGender(e.target.value)} size="sm"  className="custom-input-login-r" required>
                                {
                                    genders.map((g: string, i: number)=>{
                                        return <option value={g} key={i}>{g}</option>
                                    })
                                }
                            </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control type="password" value={applicationContext?.password} onChange={(e)=>applicationContext?.setPassword(e.target.value)} placeholder="Password" className="custom-input-login-r" required/>
                            </FloatingLabel>
                            <div style={{width: '100%', alignItems: 'stretch', display: 'flex', flexDirection: 'column'}}><InvertedPrimaryButton type="submit" title="Sign Up" /></div>
                        </Form>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: '#F6F6F6' }}>
                </Col>
            </Row>
        {/* </Container> */}
    </div>
}

export default RegistrationPage