import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import {FaAlignRight} from "react-icons/lib/fa";

const BSTextField = ({
                         setValue,
                         value,
                         name,
                         disabled, errors, type, label, placeholder
                     }) => {
    const [focus, setFocus] = useState(false);
    return (
        <Form.Group className={"bmd-form-group " + (focus ? "is-focused" : "")}>
            <Form.Label className={"bmd-label-static"} id={placeholder} column={false} children={placeholder}/>
            <Form.Control onBlur={() => {
                setFocus(false)
            }} onFocus={() => {
                if (!focus) {
                    setFocus(true)
                }
            }} id={placeholder} isInvalid={errors ? errors.length > 0 : false} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} type={type} placeholder={placeholder}/>

            {errors && errors.length > 0 ?
                errors.map(error => {
                    return (<Form.Text className="text-danger">{error} </Form.Text>)
                }) : null}
        </Form.Group>

    )
};
BSTextField.defaultProps = {
    label: <FaAlignRight/>
};
BSTextField.propTypes = {
    setValue: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    errors: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.any,
    disabled: PropTypes.bool,
};

export default BSTextField;
