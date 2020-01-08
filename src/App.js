import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {Home} from './Component/Home.js';
import { Register } from './Component/Register.js'
import { Login } from './Component/Login.js';
import { Navbar } from 'reactstrap';
//import {Test} from './Component/Test.js';
//import {Profile} from './Component/Profile';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={() => { return (<Home />) }} />
        <Route path="/Register" exact render={() => { return (<Register />) }} />
        <Route path="/Login" exact render={() => { return (<Login />) }} />
        <Route path="/Nav" exact render={() => { return (<Navbar />) }} />
      </BrowserRouter>
    );
  }
}

export default App;
