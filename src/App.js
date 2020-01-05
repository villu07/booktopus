import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {Register} from './Component/Register.js'
import {Login} from './Component/Login.js';
import { Navbar } from 'reactstrap';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={()=>{return(<Register/>)}}/>
        <Route path="/Login" exact render={()=>{return(<Login/>)}}/>
        <Route path="/Nav" exact render={()=>{return(<Navbar/>)}}/>
      </BrowserRouter>
    );
  }
}

export default App;
