import React from 'react'
import {Route, HashRouter, Switch} from 'react-router-dom'
import Main from './components/Main'
import ScrollToTop from './components/Layout/ScrollTop'
import SignIn from "./pages/SignIn";

export default props => (
    <HashRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/signup' component={SignIn}/>
            </Switch>
        </ScrollToTop>
    </HashRouter>
)