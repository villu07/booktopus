import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Label, FormGroup, Table, CardLink } from 'reactstrap';
import { GiSpellBook } from 'react-icons/gi';
import { MdPerson, MdLock } from 'react-icons/md';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import '../Component/css/index.css';
import { login } from './UserFunctions';

export class Login extends Component {

    constructor() {
        super()
        this.state = {

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
            email: this.state.email,
            password: this.state.password
        }

        login(user)
            .then(res => {

                //this.props.browserHistory.push('/Profile');
                //Redirect.call('/Profile');
                <Redirect to="/Profile"/>
            })
    }

    render() {
        return (
            <div>
                <Table bordered className="login-form mt-5 mb-5"
                    style={{
                        border: '2px solid #ff6f00 ', borderCollapse: 'collapse', backgroundColor: '#ffd54f  ',
                        maxWidth: '380px', margin: 'auto'
                    }}>
                    <td>
                        <Form noValidate onSubmit={this.onSubmit}>
                            <div className="text-center mt-3 mb-3"><GiSpellBook size="50px" color="#ff6f00 " /></div>
                            <h2 className="text-center mb-3">BOOKTOPUS</h2>
                            <FormGroup>
                                <MdPerson size="15px" />
                                <Label className="a">Email</Label>
                                <Input type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    size="sm"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <MdLock size="15px" />
                                <Label className="a">Password</Label>
                                <Input type="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    size="sm"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    required />
                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" className="button">Login</Button>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <CardLink href="/Register" style={{ color: '#000000', fontSize: '13px' }}>Sign up</CardLink>
                                <span className="p-2" style={{ fontSize: '13px' }}>|</span>
                                <CardLink href="/ForgotPassword" style={{ color: '#000000', fontSize: '13px' }}>Forgot Password</CardLink>
                            </div>
                        </Form>
                    </td>
                </Table>
            </div>
        )
    }
}
export default Login;
