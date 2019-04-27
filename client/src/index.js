import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store,{History} from './redux/store';
import   {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Index =(props)=> {
        return (
            <Provider store={store}>
                    <Router history={History}>
                        <App/>
                    </Router>
            </Provider>
        );
};

ReactDOM.render(<Index/>, document.getElementById('root'));



serviceWorker.unregister();
