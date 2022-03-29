import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

function DoorForm() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ firstname: '', lastname: '', username: '', city: '', state: '', zip: '' });
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        if (params.id) {
            setEdit(true)
            axios.get(`http://localhost:5000/doors/${params.id}`)
                .then(res => {
                    const sort = res.data
                    setFormData({
                        firstname: sort.firstname,
                        lastname: sort.lastname,
                        username: sort.username,
                        city: sort.city,
                        state: sort.state,
                        zip: sort.zip
                    })
                })
        }
    }, [])
    const submitForm = () => {
        axios.post('http://localhost:5000/doors', formData)
            .then(res => {
                console.log("res", res);
            })
    }

    const EditForm = () => {
        axios.put(`http://localhost:5000/doors/${params.id}`, formData)
            .then(res => {
                console.log("res", res);
                navigate(`/desk05/${params.id}`)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            if (params.id) {
                EditForm();
            } else {
                submitForm();
            }
        }

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Header name='React' back="/desk02" />
            <br />
            <Container fluid="md">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                name='firstname'
                                value={formData.firstname}
                                onChange={(e) => handleChange(e)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a First Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                name='lastname'
                                value={formData.lastname}
                                onChange={(e) => handleChange(e)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a Last Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name='username'
                                    value={formData.username}
                                    onChange={(e) => handleChange(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                required
                                name="city"
                                value={formData.city}
                                onChange={(e) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                required
                                name='state'
                                value={formData.state}
                                onChange={(e) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Zip"
                                required
                                name='zip'
                                value={formData.zip}
                                onChange={(e) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Container>
        </>
    );
}

export default DoorForm;