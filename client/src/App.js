import React from 'react';
import './asset/styles/bs4/BSCustom.css';
import {Route, Switch} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import NotFoundPage from './pages/ErrorsPage/NotFoundPage';
import Test from "./component/Test";

function App (props) {
        return (
            <Switch>
                <Route exact path={"/signin"}
                       component={SignIn}/>
                <Route exact path={"/test"}
                       component={Test}/>
                <Route exact path={"*"}
                       render={(props) => <NotFoundPage errorCode={404}/>}/>
            </Switch>
        );
}
export default App;
