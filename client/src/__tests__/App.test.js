import React from 'react';
import {
    mount,shallow,render
} from '../../enzymeConfig'

import App from "../App"
it('Switch exists', () => {

    const Wrapper = shallow(
        <App />
    )

    expect(Wrapper.find('Switch').exists()).toBeTruthy();
});





