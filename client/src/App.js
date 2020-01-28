import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {jssPreset, StylesProvider} from '@material-ui/core/styles'
import './App.css';
import Routes from './routes'
import {create} from 'jss';
import rtl from 'jss-rtl';
import theme from './confige/theme';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

class App extends Component {
  render() {
    return (
        <div>
          <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
              <Routes/>
            </StylesProvider>
          </ThemeProvider>
        </div>
    );
  }
}

export default App;
