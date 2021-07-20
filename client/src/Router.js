import React from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import IsLogin from './components/IsLogin';
import Notlogin from './components/Notlogin';
import Register from './components/Register';

function Router() {
    let isLogin = (tf) => {
        return tf;
    } 
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact component={
                        isLogin === true
                        ? IsLogin 
                        : Notlogin
                    } />  
                    <Route render={() => <div className='error'>에러 페이지</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
