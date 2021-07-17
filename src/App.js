import React from 'react';
import './App.css';
import IsLogin from './components/IsLogin';
import NotLogin from './components/Notlogin';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    //jshint ignore:start
    <div className="App">
      <Router>
        <Switch>
          <IsLogin />
        </Switch>
      </Router>
    </div>
    //jshint ignore:end
  );
}

export default App;
