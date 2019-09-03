import React from 'react';
import {Col, Row, Container, Button} from 'react-bootstrap';
import BSDatePicker from "./Primary/BSDatePicker";
import BSTextField from "./Primary/BSTextField";
import {FaUser} from "react-icons/lib/fa";


Test.defaultProps = {};
Test.propTypes = {};

function Test(props) {
    const [value, setValue] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    return (
        <Container fluid>
            <Row>
                <Col  md={6} xs={12}>
                    <BSTextField value={username} setValue={setUsername} placeholder={"نام کاربری"}
                                 errors={[]}
                                 label={<FaUser/>}/>
                </Col>
                <Col  md={6} xs={12}>
                    <BSDatePicker inputPlaceholder={"تاریخ نمونه"} value={value} onChange={setValue}/>
                </Col>
            </Row>
            <Row style={{backgroundColor:"#40404f"}}>
                <Col  md={2}>
                    <Button block variant="outline-primary"  size={"md"}>outline-primary</Button>
                    <Button block variant="primary"  size={"md"}>primary</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-secondary"  size={"md"}>outline-secondary</Button>
                    <Button block variant="secondary"  size={"md"}>secondary</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-danger"  size={"md"}>outline-danger</Button>
                    <Button block variant="danger"  size={"md"}>danger</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-warning"  size={"md"}>outline-warning</Button>
                    <Button block variant="warning"  size={"md"}>warning</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-dark"  size={"md"}>outline-dark</Button>
                    <Button block variant="dark"  size={"md"}>dark</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-info"  size={"md"}>outline-info</Button>
                    <Button block variant="info"  size={"md"}>info</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-success"  size={"md"}>outline-success</Button>
                    <Button block variant="success"  size={"md"}>success</Button>
                </Col>
                <Col  md={2}>
                    <Button block variant="outline-light"  size={"md"}>outline-light</Button>
                    <Button block variant="light"  size={"md"}>light</Button>
                </Col>
            </Row>
        </Container>

    );
}


export default Test;
