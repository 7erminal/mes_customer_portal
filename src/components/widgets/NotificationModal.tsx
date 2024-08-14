import React from "react";
import { Button, Modal } from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";

type Props = {
    show: boolean
    navigateTo: ()=>void
    title: string
    message: string
    buttonText: string
    titleColor: string
}

const NotificationModal: React.FC<Props> = ({show, navigateTo, title, message, buttonText, titleColor})=>{
    return <Modal show={show} onHide={navigateTo} backdrop="static" centered>
    <Modal.Body>
    <Modal.Title style={{color: `${titleColor}`}}>{title}</Modal.Title>
        {message}
        <br />
        <hr />
        <PrimaryButton type="button" title={buttonText} navigateTo={navigateTo} />
    </Modal.Body>
  </Modal>
}

export default NotificationModal