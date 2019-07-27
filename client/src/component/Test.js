import React from 'react';
import {Container} from 'react-bootstrap';
import {FaUser} from "react-icons/lib/fa";
import PropTypes from 'prop-types';
import BSTextField from "./Primary/BSTextField";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "@material-ui/core/Card";

Test.defaultProps = {};
Test.propTypes = {};

function Test(props) {
    const [value, setValue] = React.useState("")
    return (
        <Container className={"mt-2"}>
            <Container className={"mt-2"}>
                <Card body>
                    <Row>
                        <Col xs={12} md={4}>
                            <BSTextField value={value} setValue={setValue} placeholder={"نام کاربری"} errors={[]}
                                         label={<FaUser/>}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <BSTextField value={value} setValue={setValue} placeholder={"نام کاربری"} errors={[]}/>

                        </Col>
                        <Col xs={6} md={4}>
                            <BSTextField value={value} setValue={setValue} placeholder={"نام کاربری"} errors={[]}
                                         label={<FaUser/>}/>

                        </Col>
                    </Row>
                </Card>
            </Container>
        </Container>

    );
}


export default Test;
