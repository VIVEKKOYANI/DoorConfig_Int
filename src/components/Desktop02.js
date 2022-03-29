import { Card, Col, Container, Row } from "react-bootstrap";
import { SiAccenture } from "react-icons/si";
import Header from "./Header";

function Desktop02() {
    return (
        <>
            <Header name='React' link="/desk04" back="/"/>
            <br />
            <Container fluid="md">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>
                                    Configure your door from scratch.
                                </Card.Title>
                                <Card.Text style={{ color: '#8894A0' }}>
                                    Residential, Commerical, Enter doors.
                                </Card.Text>
                            </Col>
                            <Col xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <SiAccenture />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>
                                    Parts / Openers.
                                </Card.Title>
                                <Card.Text style={{ color: '#8894A0' }}>
                                    Order Parts and Openers.
                                </Card.Text>
                            </Col>
                            <Col xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <SiAccenture />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>
                                    Direct Item Entry.
                                </Card.Title>
                                <Card.Text style={{ color: '#8894A0' }}>
                                    Orders Parts / Openers using a Product ID.
                                </Card.Text>
                            </Col>
                            <Col xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <SiAccenture />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>
                                    Choose from favourites.
                                </Card.Title>
                                <Card.Text style={{ color: '#8894A0' }}>
                                    Re-order door from your favourites.
                                </Card.Text>
                            </Col>
                            <Col xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <SiAccenture />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Desktop02;