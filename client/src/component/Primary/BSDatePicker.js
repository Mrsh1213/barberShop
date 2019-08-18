import React from 'react';
import PropType from 'prop-types';
import {Row, Col, Container, InputGroup, Form} from 'react-bootstrap';
import "../../asset/styles/DatePicker.css";
import {FaCalendar} from "react-icons/lib/fa";
import DatePicker from "react-persian-calendar-date-picker/lib/DatePicker";
import {jalaliDateToTimestamp, timestampDateTojalali} from "../../helper";


function BSDatePicker(props) {
    const {inputPlaceholder,value,onChange}=props;

    return (
        <Container >
            <Row>
                <Col md={12} sm="12">
                    <Form.Group className={"bmd-form-group  is-focused"}>
                        <Form.Label className={"bmd-label-static"} id={inputPlaceholder} column={false} children={inputPlaceholder}/>
                    <DatePicker
                        wrapperClassName={"pt-1"}
                        selectedDay={timestampDateTojalali(value)}
                        onChange={(e)=>{onChange(jalaliDateToTimestamp(e))}}
                        inputPlaceholder={inputPlaceholder}
                    /></Form.Group>
                </Col>
            </Row>

        </Container>
    );
}

BSDatePicker.propTypes = {
    value:PropType.number,
    onChange:PropType.func.isRequired,
    inputPlaceholder:PropType.string,
};
export default BSDatePicker;
