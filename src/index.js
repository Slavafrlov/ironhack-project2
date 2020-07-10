import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './container/Login';
import Signup from './container/Signup';

ReactDOM.render(
    <HashRouter>
    <Switch>
    <Route path='/login' component={Login}></Route>
    <Route path='/signup' component={Signup}></Route>
    <Route component={App}></Route>
    </Switch>
    </HashRouter>
    , document.querySelector('#root')
)