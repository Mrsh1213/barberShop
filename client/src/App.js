import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/styles/BSCustom.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import NotFoundPage from './pages/ErrorsPage/NotFoundPage';
import Test from "./component/Test";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/signin"}
                           component={SignIn}/>
                    <Route exact path={"/test"}
                           component={Test}/>
                    <Route exact path={"*"}
                           render={(props)=><NotFoundPage errorCode={404}/>}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
