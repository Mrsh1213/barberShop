import React from 'react';
import { Container} from 'react-bootstrap';
import BsCalender from "./Primary/BSCalender";



Test.defaultProps = {};
Test.propTypes = {};

function Test(props) {
    const [value,setValue]=React.useState(null);
    return (
        <Container className={"mt-2"}>
            <BsCalender inputPlaceholder={"انتخاب تاریخ"} value={value} onChange={setValue}/>
        </Container>

    );
}


export default Test;
