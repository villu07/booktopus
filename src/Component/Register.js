import React, { Component } from 'react';
import { browserHistory } from 'history'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://fonts.googleapis.com/css?family=Montserrat%27';
import { Button, Form, Input, Label, FormGroup, Table } from 'reactstrap';
import { GiSpellBook } from 'react-icons/gi';
import '../Component/css/index.css';
import { register } from './UserFunctions';
//import { Button } from 'reactstrap';

export class Register extends Component {

    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {

        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user)
            .then(res => {

                this.props.browserHistory.push('/Login');
            })
    }

    render() {
        return (
            <div>
                <Table bordered className="login-form mt-5 mb-5"
                    style={{
                        border: '5px solid #ffffff ', borderCollapse: 'collapse', backgroundColor: '#ffffff  ',
                        maxWidth: '40%', margin: 'auto', opacity: '0.8'
                    }}>
                    <td>
                        <Form noValidate onSubmit={this.onSubmit}>
                            <div className="text-center mt-3 mb-3"><GiSpellBook size="50px" color="#ff6f00 " /></div>
                            <h2 className="text-center mb-3">BOOKTOPUS</h2>
                            <FormGroup>
                                <Label className="a">First Name</Label>
                                <Input type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="Enter Your First Name"
                                    size="sm"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label className="a">Last Name</Label>
                                <Input type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Enter Your Last Name"
                                    size="sm"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label className="a">Email</Label>
                                <Input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    size="sm"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label className="a">Password</Label>
                                <Input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    size="sm"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label className="a">Confirm Password</Label>
                                <Input type="Password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Enter Your Confirm Password"
                                    size="sm"
                                    required />
                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" className="button">Register</Button>
                            </div>
                        </Form>
                    </td>
                </Table>
            </div>
        )
    }
}
export default Register
