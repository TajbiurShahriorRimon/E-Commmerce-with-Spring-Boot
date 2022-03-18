import React, { useState } from 'react';
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,FormFeedback} from "reactstrap";
import { group } from 'console';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';

export default function VendorRegistration(){

    
    useEffect(()=>{

    },[]);

    const [user,setUser]=useState({
        name:"",
        mail:"",
        phone:"",
        address:"",
        gender:""
        
    });

    const [vendor,setVendor]=useState({
        
        shopPhone:"",
        shopAddress:"",
        regNumber:"",
        shopName:""
        
    });

    var formData= new FormData();
    var mailError: string="";
    //number of inputs in the form excluding gender as it has a default value
    var numberOfInputs: number=4;
   
    const handleForm=(e:any)=>{
        console.log(vendor);
        
        
        postDataToServer(JSON.stringify(vendor));
        e.preventDefault();
    }

    //function to post data on server
    const postDataToServer=(data:any)=>{
        axios.post(`${base_url}uReg`,data,{
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }}).then(
            (response)=>{
                    alert("Success");
            },(error)=>{
                
                let res:string[]=Object.values(error.response.data);
                let errorMsg:string="";

                for(let i=0;i<res.length;i++){
                    errorMsg+=res[i];
                    errorMsg+="\n"
                }
                
                  alert(errorMsg);
                
                
                
                
            }
        );
    };
    return(
        <div >
            <Container >
            <Row className='justify-content-center my-5'>
                <Col md={4}>
                    <Form onSubmit={handleForm}>
                            <Label className="form-label my-2" for="mail">
                                Email
                            </Label>
                            <Input 
                                id="userEmail"
                                name="mail"
                                placeholder="Enter Your Mail Id"
                                type="email"
                                className='form-control'
                                onChange={(e)=>{
                                    setUser({...user,mail:e.target.value})
                                }}
                            />
                            
                            
                              
                                
                            
                            
                                                   
                            


                            {/* <Label className='form-label my-2' for="userPassword">
                                Password
                            </Label>
                            <Input
                                id="userPassword"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                                className='form-control'
                                onChange={(e)=>{
                                    setUser({...user,pass:e.target.value})
                                }}
                            /> */}

                            <Label className='form-label my-2' for="Name">
                                Name
                            </Label>
                            <Input
                                id="userName"
                                name="Name"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setUser({...user,name:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="userPhone">
                                Phone
                            </Label>
                            <Input
                                id="userPhone"
                                name="userPhone"
                                placeholder="Phone Number"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setUser({...user,phone:e.target.value})
                                }}
                            />
                            
                            <Label className='form-label my-2' for="userPhone">
                                Address
                            </Label>
                            <textarea className="form-control styleTextarea"  id="userAddress" 
                             onChange={(e)=>{
                                setUser({...user,address:e.target.value})
                            }}
                            ></textarea>
                            <Label className='form-label my-2' for="userPhone">
                                Gender
                            </Label>
                            <select className="form-select" aria-label="Default select example" id="userGender" onChange={(e)=>{
                                    setUser({...user,gender:e.target.value})
                                }}>
                                <option selected value="male">Male</option>
                                <option value="femal">Female</option>
                            </select>
                            

                            <Label className='form-label my-2' for="shopPhone">
                               Shop Phone
                            </Label>
                            <Input
                                id="shopPhone"
                                name="shopPhone"
                                placeholder="Phone Number"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setVendor({...vendor,shopPhone:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="shopName">
                                Shop Name
                            </Label>
                            <Input
                                id="shopName"
                                name="shopName"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setVendor({...vendor,shopName:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="regNumber">
                               Shop Registration Number
                            </Label>
                            <Input
                                id="regNumber"
                                name="regNumber"
                                placeholder="Phone Number"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setVendor({...vendor,regNumber:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="shopAddress">
                              Shop  Address
                            </Label>
                            <textarea className="form-control styleTextarea"  id="shopAddress" 
                             onChange={(e)=>{
                                setVendor({...vendor,shopAddress:e.target.value})
                            }}
                            ></textarea>
                            <input type="hidden" id="type" name="type" value="vendor"></input>
                            <Button className='my-2 w-100' type='submit' color='primary'>Submit</Button>
                    </Form>
                   
                </Col>
                </Row>
            
            </Container>
   
        </div>
    )
}