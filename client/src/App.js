import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Test from "./component/Test";



class App extends Component {
  render() {
    return (
        <Switch>
        <Route exact path={"/"}
      component={Test}/>

      </Switch>
    );
  }
}

export default App;
