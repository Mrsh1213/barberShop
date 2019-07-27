import React from 'react';
import PropTypes from 'prop-types';

import './index.css'

const texts = {
    404: 'صفحه مورد نظر یافت نشد',
    500: 'Something went wrong with the server.',
};

const ReactErrorPage = ({errorCode, customText}) => {
    let text = texts[errorCode] || customText || undefined;

    return (
        <div className="ReactErrorPage">
            <h1 className="ReactErrorPage-404">{errorCode}</h1>
            <span>خطا</span>
            {text && <h4>{text}</h4>}
        </div>
    )
};

ReactErrorPage.propTypes = {
    errorCode: PropTypes.number.isRequired,
    customText: PropTypes.string,
};

export default ReactErrorPage;
