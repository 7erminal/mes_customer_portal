import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    icon: string
    title: string
    description: string
}

const ServiceTile: React.FC<Props> = ({icon, title, description})=>{
    return <div className="service-tile">
        <Container>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column'}}>
                    <Row className="mt-4">{icon}</Row>
                    <Row className="mt-2"><h5>{title}</h5></Row>
                    <Row className="my-4 default-text-css">{description}</Row>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ServiceTile