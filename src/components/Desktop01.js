import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function DoorUserList() {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5000/doors')
            .then(res => {
                setUser(res.data)
            })
    }

    const handleNavigate = (id) => {
        navigate(`/desk05/${id}`)
    }

    const handleSearch = (e) => {
        if (e.target.value === '') {
            console.log("e.target.value",e.target.value);
            getData();
        } else {
            const data = user.filter((item => item.firstname.includes(e.target.value)))
            setUser(data)
            // setSearch(e.target.value)
        }
    }

    console.log("user", user);
    return (
        <>
            <Header link='/desk02' />
            <br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div className="form-group">
                        <label htmlFor="example1">Search</label>
                        <input type="text" id="example1" className="form-control form-control-md" value={search} onChange={(e) => handleSearch(e)} />
                    </div>
                </Col>
            </Row>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr style={{ color: '#8894A0', fontSize: '12px' }}>
                        <th>FISTNAME</th>
                        <th>LASTNAME</th>
                        <th>USERNAME</th>
                        <th>CITY</th>
                        <th>STATE</th>
                        <th>ZIP</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, i) => {
                        return (
                            <tr onClick={() => handleNavigate(item.id)} key={item.id}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.username}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.zip}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default DoorUserList;