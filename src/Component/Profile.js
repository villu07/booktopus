import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

export class Profile extends Component {

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }

    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({

            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{this.state.first_name}</td>
                            <td>{this.state.last_name}</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </Table>

                <a href="" onClick={this.logOut.bind(this)}>
                    Logout
                </a>
            </div>
        )
    }
}

export default Profile
