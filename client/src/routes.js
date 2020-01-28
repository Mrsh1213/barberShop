import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Main from './components/Main'
// import SignIn from "./pages/SignIn";

export default props => (
    <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                {/*<Route exact path='/signup' component={SignIn}/>*/}
            </Switch>
    </Router>
)