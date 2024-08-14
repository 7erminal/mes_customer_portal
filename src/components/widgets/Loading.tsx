import React from "react";
import { Container, Modal, Row } from "react-bootstrap";
import PropagateLoader from "react-spinners/PropagateLoader";

type Props = {
    show: boolean
}

const Loading: React.FC<Props> = ({show})=>{
    return <Modal
    centered
    show={show}
    dialogClassName="loading"
  >
        <Container>
            <Row>
                <PropagateLoader color="#BDDFFF" size={20} />
            </Row>
        </Container>
  </Modal>
}

export default Loading