import React, { useState } from 'react';
import logo from './logo.svg';
//import '../../App.css';
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,FormFeedback} from "reactstrap";
import { group } from 'console';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';




function Login(){
    return(
        <div >
            <Container >
            <Row className='justify-content-center my-5'>
                <Col md={4}>
                <h1  className="form-label my-2">Login</h1><br></br>
                    <Form>
                            <Label className="form-label my-2" for="email">
                                Email
                            </Label>
                            <Input 
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                type="email"
                                className='form-control'
                            />
                            

                            <Label className='form-label my-2' for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="price"
                                placeholder="Enter Your Password"
                                type="password"
                                className='form-control'
                            />
                            <br></br>
                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">
                                <div>
                                    <input type="checkbox" value="" id="remember" checked />
                                    <label> Remember me </label>
                                </div>
                                </div>

                                <div className="col">
                                <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <Button className='my-2 w-100' type='submit' color='primary'>Login</Button><br></br><br></br>
                            <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                    </Form>
                   
                </Col>
                </Row>
            
            </Container>
   
        </div>
    )
}

export default Login;
