import reduxx from './reducers/index';
import {createBrowserHistory} from 'history';
import { createStore } from 'redux';
export default createStore(reduxx);

export const History=createBrowserHistory();