import React, { useState } from 'react';
import { Input,Row,Form,Col,Label,Button,Container } from 'reactstrap';

export default function UserPassword(){

    

    const [passwordObj,setPassword]=useState({
        password:"",
        confirmPassword:""

        
    });


    return(
        <div>
             
            <Row className='justify-content-center my-5'>
                <Col md={4}>
                    <Form >
                        <div>
                            <Label className='form-label my-2' for="pass">
                                Password
                            </Label>
                            <Input type="password" id="pass" name="password"
                               placeholder='At least 8 characters' minlength="8" required
                            />
                            <Label className='form-label my-2' for="confirmPass">
                                Confirm Password
                            </Label>
                            <Input type="password" id="confirmPass" name="confirmPassword"
                               placeholder='Confirm password' minlength="8" required
                            />
                            <Button className='my-2 w-100' type='submit' color='primary'>Submit</Button>
                        </div>
                    </Form>
                   
                </Col>
            </Row>
            
        </div>
    )


}