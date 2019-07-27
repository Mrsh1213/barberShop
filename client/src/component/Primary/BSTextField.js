import React from 'react';
import PropTypes from 'prop-types';
import {Form,InputGroup} from 'react-bootstrap';
import {FaAlignRight} from "react-icons/lib/fa";



const BSTextField = ({setValue,
                         value,
                         name,
                         disabled,errors,type,label,placeholder}) => {


    return (
        <Form.Group>
        <InputGroup  >
            {label ?
                <InputGroup.Prepend>
                    <InputGroup.Text>{label}</InputGroup.Text>
                </InputGroup.Prepend>
          :null  }
            <Form.Control isInvalid={errors.length>0} value={value} onChange={(e)=>{setValue(e.target.value)}} type={type} placeholder={placeholder} />
        </InputGroup>
                {errors&&errors.length>0?
                    errors.map(error=>{
                    return(  <Form.Text className="text-danger">{error } </Form.Text>)
                }):null}
          </Form.Group>

    )
};
BSTextField.defaultProps = {
    label:<FaAlignRight/>
};
BSTextField.propTypes = {
    setValue: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    errors: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes,
    disabled: PropTypes.bool,
};

export default BSTextField;
