import React from 'react';
import { Form} from 'react-bootstrap';
import BSDatePicker from "./Primary/BSCalender";



Test.defaultProps = {};
Test.propTypes = {};

function Test(props) {
    const [value,setValue]=React.useState(null);
    return (
        <Form.Group className={"bmd-form-group "}>
            <BSDatePicker inputPlaceholder={"تاریخ نمونه"} value={value} onChange={setValue}/>
        </Form.Group >

    );
}


export default Test;
