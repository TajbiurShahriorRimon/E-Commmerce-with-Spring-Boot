import React, { useState } from 'react';
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,FormFeedback} from "reactstrap";
import { group } from 'console';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function VendorRegistrationShop(){

    
    useEffect(()=>{

    },[]);

  
    const [vendor,setVendor]=useState({
        mail:"",
        shopPhone:"",
        shopAddress:"",
        regNumber:"",
        shopName:""
        
    });

    type VendorParams={
        mail:string;
    };
    
    const { mail } = useParams<VendorParams>();
    
    //number of inputs in the form excluding gender as it has a default value
    var numberOfInputs: number=4;
   
    const handleForm=(e:any)=>{
        console.log(vendor);
        
        vendor.mail=mail!;
        postDataToServer(JSON.stringify(vendor));
        e.preventDefault();
    }

    //function to post data on server
    const postDataToServer=(data:any)=>{
        alert(mail);
        axios.post(`${base_url}uVendorReg`,data,{
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