import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://fonts.googleapis.com/css?family=Montserrat%27';
import {Button,Form, Input,Label,FormGroup,Table} from 'reactstrap';
import {GiSpellBook} from 'react-icons/gi';
import './index.css';
//import { Button } from 'reactstrap';

export class Register extends Component {
    render() {
        return (
            <div>
                <Table bordered className="login-form mt-5 mb-5"
                 style={{border:'5px solid #ff6f00 ',borderCollapse:'collapse',backgroundColor:'#ffd54f  ',
                 maxWidth:'400px',margin:'auto'}}>
                        <td>
                            <Form method="post">
                                <div className="text-center mt-3 mb-3"><GiSpellBook size="50px" color="#ff6f00 "/></div>
                                <h2 className="text-center mb-3">BOOKTOPUS</h2>
                                <FormGroup>
                                    <Label className="a">First Name</Label>
                                    <Input type="text" name="firstname" placeholder="Enter Your First Name" size="sm" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="a">Last Name</Label>
                                    <Input type="text" name="lastname" placeholder="Enter Your Last Name" size="sm" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="a">Email</Label>
                                    <Input type="email" name="email" placeholder="Enter Your Email" size="sm" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="a">Password</Label>
                                    <Input type="password" name="password" placeholder="Enter Your Password" size="sm" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="a">Confirm Password</Label>
                                    <Input type="Password" name="confirmpassword" placeholder="Enter Your Confirm Password" size="sm" required/>
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
