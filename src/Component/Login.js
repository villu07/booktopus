import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://fonts.googleapis.com/css?family=Montserrat%27';
import {Button,Form, Input,Label,FormGroup,Table,CardLink} from 'reactstrap';
import {GiSpellBook} from 'react-icons/gi';
import {MdPerson,MdLock} from 'react-icons/md';
import './index.css';
//import { Button } from 'reactstrap';

export class Login extends Component {
    render() {
        return (
            <div>
                <Table bordered className="login-form mt-5 mb-5"
                 style={{border:'2px solid #ff6f00 ',borderCollapse:'collapse',backgroundColor:'#ffd54f  ',
                 maxWidth:'380px',margin:'auto'}}>
                        <td>
                            <Form method="post">
                                <div className="text-center mt-3 mb-3"><GiSpellBook size="50px" color="#ff6f00 "/></div>
                                <h2 className="text-center mb-3">BOOKTOPUS</h2>
                                <FormGroup>
                                    <MdPerson size="15px"/>
                                    <Label className="a">Email</Label>
                                    <Input type="email" name="email" placeholder="Enter Your Email" size="sm" required />
                                </FormGroup>
                                <FormGroup>
                                    <MdLock size="15px"/>
                                    <Label className="a">Password</Label>
                                    <Input type="password" name="password" placeholder="Enter Your Password" size="sm" required/>
                                </FormGroup>                                
                                <div className="text-center">
                                <Button type="submit" className="button">Login</Button>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <CardLink href="/Signup" style={{color:'#000000',fontSize:'13px'}}>Sign up</CardLink>
                                    <span className="p-2" style={{fontSize:'13px'}}>|</span>
                                    <CardLink href="/ForgotPassword" style={{color:'#000000',fontSize:'13px'}}>Forgot Password</CardLink>
                                </div>
                            </Form>
                            </td>
                    </Table>
                </div>
        )
    }
}
export default Login;
