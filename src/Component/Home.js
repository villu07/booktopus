import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/css/index.css';

export class Home extends Component {

    render() {
        return (
            <div>
                Hello world
                <a href="Register">Register</a>
                <a href="Login">Login</a>
            </div>


        )
    }
}

export default Home