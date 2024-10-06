import React, { useState, useEffect, useContext, useRef } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import SecondaryButton from "./widgets/SecondaryButton";
import ApplicationContext from "../resources/ApplicationContext";
// @ts-ignore
import Api from "../apis/apis.js"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

const CreateCampaign: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    
    const [singleRecipient, setSingleRecipient] = useState(false)
    const [checkLabel, setCheckLabel] = useState("Multiple recipients")
    const [sms, setSms] = useState(false)
    const [email, setEmail] = useState(false)

    const [campaignName, setCampaignName] = useState("")
    const [message, setMessage] = useState("")
    const [deliveryTime, setDeliveryTime] = useState("")
    const [recipientNumber, setRecipientNumber] = useState("")
    const [recipientEmail, setRecipientEmail] = useState("")
    const [recipientFile, setRecipientFile] = useState<File | undefined | null>()

    const fileRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(singleRecipient==true){
            setCheckLabel("Single recipient")
        } else {
            setCheckLabel("Multiple recipients")
        }
    }, [singleRecipient])

    const createCampaign = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData: any = new FormData();

        formData.append('campaignName', campaignName)
        formData.append('campaignMessage', message)
        formData.append('deliveryTime', deliveryTime)
        formData.append('recipientNumber', recipientNumber)
        formData.append('recipientEmail', recipientEmail)
        formData.append('recipients', recipientFile)
        formData.append('requestBy', applicationContext?.user?.UserId)

        let proceed = true

        console.log("Delivery time set is "+deliveryTime)

        if(sms==true && email==false){
            formData.append('type', 'SMS')
        } else if(email==true && sms==false){
            formData.append('type', 'EMAIL')
        } else if(email==true && sms==true){
            formData.append('type', 'EMAIL, SMS')
        } else {
            proceed = false
        }

        if(proceed == true){
            await new Api().postMultipart_(formData, ROUTES.scheduleCampaign).then((response: any)=>{
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
    
                        applicationContext?.setNotificationHandler({action: ()=>{
                            applicationContext?.setShowSuccessMessage(false)
                            applicationContext?.setSuccessMessage("")
                            // handleClose()
                          }, path: ''})
    
                        setCampaignName("")
                        setDeliveryTime("")
                        setRecipientEmail("")
                        setMessage("")
                        setRecipientNumber("")
                        setRecipientFile(undefined)
                        setSms(false)
                        setEmail(false)
                        fileRef.current != null ? fileRef.current!.value = "" : ''
                    }
                } else {
                    applicationContext?.setErrorMessage(response.data.StatusDesc)
                    applicationContext?.setShowErrorMessage(true)
                    applicationContext?.setNotificationHandler({action: ()=>{
                        applicationContext?.setShowErrorMessage(false)
                        applicationContext?.setErrorMessage("")
                      }, path: ''})
                }
            }).catch((error: any)=> {
            applicationContext?.setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            applicationContext?.setErrorMessage("Sorry...something went wrong. Please try again")
            applicationContext?.setShowErrorMessage(true)
            applicationContext?.setNotificationHandler({action: ()=>{
                applicationContext?.setShowErrorMessage(false)
                applicationContext?.setErrorMessage("")
                }, path: ''})
            })

            console.log("Submitted")
        } else {
            applicationContext?.setErrorMessage("Please select at least one delivery method")
            applicationContext?.setShowErrorMessage(true)
            applicationContext?.setNotificationHandler({action: ()=>{
                applicationContext?.setShowErrorMessage(false)
                applicationContext?.setErrorMessage("")
                }, path: ''})
        }
    }

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
                    checked={sms}
                    onChange={()=>setSms(!sms)}
                />
            </Col>
            <Col>
                <Form.Check // prettier-ignore
                    type="checkbox"
                    id="checkbox2"
                    label="Email"
                    checked={email}
                    onChange={()=>setEmail(!email)}
                />
            </Col>
        </Row>
        <Form onSubmit={createCampaign}>
            <FloatingLabel
                controlId="floatingInputName"
                label="Campaign name"
                className="mb-3"
                style={{backgroundColor: '#F0FBFF'}}
            >
                <Form.Control type="text" value={campaignName} onChange={(e)=>setCampaignName(e.target.value)} placeholder="Campaign name" className="custom-input-login-r" required/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputMessage"
                label="Message"
                className="mb-3"
                style={{backgroundColor: '#F0FBFF'}}
            >
                <Form.Control as="textarea" value={message} onChange={(e)=>setMessage(e.target.value)} style={{ height: '120px' }} placeholder="Message" className="custom-input-login-r" required/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputDatetime"
                label="Schedule time of delivery"
                className="mb-3"
                style={{backgroundColor: '#F0FBFF'}}
            >
                <Form.Control value={deliveryTime} onChange={(e)=>setDeliveryTime(e.target.value)} className="custom-input-login-r my-3" aria-label="Date and time" type="datetime-local" required/>
            </FloatingLabel>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label={checkLabel}
                className="mb-3"
                checked={singleRecipient}
                onChange={()=>setSingleRecipient(!singleRecipient)}
            />
            {
                singleRecipient == false ? 
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload recipients</Form.Label>
                    <Form.Control ref={fileRef} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setRecipientFile(e.target.files![0])} className="custom-input-login-r" type="file" required />
                </Form.Group> : 
                <FloatingLabel
                    controlId="floatingInputName"
                    label="Recipient number"
                    className="mb-3"
                    style={{backgroundColor: '#F0FBFF'}}
                >
                    <Form.Control type="text" value={recipientNumber} onChange={(e)=>setRecipientNumber(e.target.value)} placeholder="Recipient number" className="custom-input-login-r" required/>
                </FloatingLabel>
            }
            <div className="my-4"></div>
            <SecondaryButton title="Schedule" type="submit" navigateTo={()=>{}} />
        </Form>
    </div>
}

export default CreateCampaign