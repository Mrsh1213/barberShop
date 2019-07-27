import React from 'react';
import {withRouter} from "react-router-dom";
import {Container,Card, Col, Row,Button} from "react-bootstrap";
import BSTextField from "../component/Primary/BSTextField";
import {FaUser, FaLock} from "react-icons/lib/fa";



function SignIn() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    function login() {

    }

    return (<Container>
            <Row className={"py-5"}>
                <Col  md={3} sm={1} />
                <Col  md={6} sm={10} >
                    <Card border={"primary"} className={"py-5"}  body>
                    <Row >
                        <Col  md={12} sm={12}>
                            <BSTextField value={username} setValue={setUsername} placeholder={"نام کاربری"} errors={[]}
                                         label={<FaUser/>}/>
                        </Col>
                        <Col  md={12} sm={12}>
                            <BSTextField value={password} setValue={setPassword} placeholder={"رمز عبور"} errors={[]}
                                         label={<FaLock/>}/>
                        </Col>
                        <Col  md={12} sm={12}>
                            <Button block variant="primary" size={"md"}>ورود</Button>
                        </Col>
                    </Row>
                    </Card>
                </Col>
                <Col md={3}  sm={1}/>
            </Row>

        </Container>
    );
}

export default withRouter(SignIn);
