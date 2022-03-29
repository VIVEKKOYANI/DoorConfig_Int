import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function Desktop05() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    console.log("user", user);
    useEffect(() => {
        axios.get(`http://localhost:5000/doors/${params.id}`)
            .then(res => {
                setUser(res.data)
            })
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/doors/${params.id}`)
            .then((res) => {
                console.log("res", res);
                navigate('/')
            })
    }

    const handleEdit = () => {
        navigate(`/desk04/${params.id}`)
    }
    return (
        <>
            <Header name='React' />
            <Container fluid="md">
                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    <Row class="btn-group" style={{ width: '100%' }}>
                        <Col md={12}>
                            <h5>FistName : {user.firstname}</h5>
                        </Col>
                        <Col md={12}>
                            <h5>LastName : {user.lastname}</h5>
                        </Col>
                        <Col md={12}>
                            <h5>UserName : {user.username}</h5>
                        </Col>
                        <Col md={12}>
                            <h5>City : {user.city}</h5>
                        </Col>
                        <Col md={12}>
                            <h5>State : {user.state}</h5>
                        </Col>
                    </Row>
                    <div class="btn-group" style={{ width: '100%', padding: '10px' }}>
                        <button style={{ width: '25%' }}>FAVORITES</button>
                        <button style={{ width: '25%' }} onClick={handleEdit}>EDIT</button>
                        <button style={{ width: '25%' }}>COPY</button>
                        <button style={{ width: '25%' }} onClick={handleDelete}>DELETE</button>
                    </div>
                </Card>
            </Container>
        </>
    );
}

export default Desktop05;