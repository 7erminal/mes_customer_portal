import React, { useContext } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import ApplicationContext from "../resources/ApplicationContext";
import InvertedPrimaryButton from "./widgets/InvertedPrimaryButton";
import NotificationModal from "./widgets/NotificationModal";
// @ts-ignore
import Api from "../apis/apis.js"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

type Props = {
    show: boolean
    handleClose: ()=>void
}

const VerifyProfile3: React.FC<Props> = ({show, handleClose})=>{
    const applicationContext = useContext(ApplicationContext)

    // const [username, setUsername] = useState(applicationContext!.user?.Username)

    const handleSuccessMessageClose = ()=>{
        applicationContext?.clearForm()
        handleClose()
    }

    const handleErrorMessageClose = ()=>{
        applicationContext?.setErrorMessage("")
        applicationContext?.setShowErrorMessage(false)
    }

    const register = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData: any = new FormData();

        console.log("DOES FILE HOLD??")
        console.log(applicationContext!.directorIDs!)

        formData.append('userid', applicationContext!.user!.UserId!.toString())
        formData.append('companyName', applicationContext!.companyName)
        formData.append('businessRegistrationNumber', applicationContext?.businessRegistrationNumber!)
        formData.append('natureOfBusiness', applicationContext!.natureOfbusiness!)
        formData.append('phoneNumber',applicationContext!.rphoneNumber)
        formData.append('streetAddress',applicationContext!.streetAddress)
        formData.append('postalAddress',applicationContext!.postalAddress)
        formData.append('alternatePhoneNumber',applicationContext!.alternatePhoneNumber)
        formData.append('numberOfDirectors',applicationContext!.numberOfDirectors)
        formData.append('certCompanyProfile',applicationContext!.certCompanyProfile!)
        formData.append('certOfCorporation',applicationContext!.certOfCorporation!)
        formData.append('certCommenceBusiness',applicationContext!.certCommenceBusiness!)

        for(var i=0; i<applicationContext!.directorIDs!.length; i++){
            formData.append('directorIDs',applicationContext!.directorIDs![i])
        }

        applicationContext?.setLoading(true)
  
        await new Api().postMultipart_(formData, ROUTES.onboard).then((response: any)=>{
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
        <h3>Provide business documents</h3>
        <Form className="my-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>register(e)}>
            <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Certified copy of company profile from RGD</Form.Label>
                    <Form.Control type="file" size="lg" className="custom-input-login-r" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>applicationContext!.setCertCompanyProfile!(e.target.files![0])} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Certificate of incorporation</Form.Label>
                    <Form.Control type="file" size="lg" className="custom-input-login-r" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>applicationContext!.setCertOfCorporation!(e.target.files![0])} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Certificate to commence business</Form.Label>
                    <Form.Control type="file" size="lg" className="custom-input-login-r" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>applicationContext!.setCertCommenceBusiness!(e.target.files![0])} required/>
                </Form.Group>
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

export default VerifyProfile3