import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div>
        {/* <img
          src={logo}
          className="App-logo"
          alt="React Logo"/> */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
