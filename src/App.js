import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router , Route , Link , NavLink  } from 'react-router-dom';
import SignupForm from './pages/signupForm';
import SigninForm from './pages/SigninForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">

            <NavLink exact to="/Signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink exact to="/Signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" >Sign In </NavLink>
            or
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" >Sign Up </NavLink>
          </div>

          <Route exact path="/" component={SignupForm}></Route>
          <Route exact path="/Signin" component={SigninForm}></Route>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
