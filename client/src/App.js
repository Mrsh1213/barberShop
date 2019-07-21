import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SignIn from "./pages/SignIn";


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/signin"}
                           component={SignIn}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
