import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from './asset/styles/theme';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from '@material-ui/styles';

import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import {MuiThemeProvider ,createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();


const Index = (props) => {
    return (


            <MuiThemeProvider theme={theme}>
                <JssProvider generateClassName={generateClassName}  jss={jss}>
                <Router>
                    <App/>
                </Router>
                </JssProvider>
            </MuiThemeProvider>



    );
};

ReactDOM.render(<Index/>, document.getElementById('root'));


serviceWorker.unregister();
