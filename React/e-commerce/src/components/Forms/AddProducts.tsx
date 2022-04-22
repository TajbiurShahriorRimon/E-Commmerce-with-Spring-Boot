import React, { useState } from 'react';
import logo from './logo.svg';
//import '../../App.css';
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,FormFeedback} from "reactstrap";
import { group } from 'console';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';
/* TODO
1) Response message misbehaves somtimes
 */




function AddProduct(props:any){

    
    useEffect(()=>{

    },[]);
    const [user,setUser]=useState({
        name:"",
        mail:"",
        phone:"",
        address:"",
        gender:""
        
    });

    var formData= new FormData();
    var mailError: string="";
    //number of inputs in the form excluding gender as it has a default value
    var numberOfInputs: number=4;
   
    const handleForm=(e:any)=>{
        console.log(user);
        
        
        postDataToServer(JSON.stringify(user));
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
                    console.log(response.data.mail);
                    alert("Success");
            },(error)=>{
                console.log(error.response.data.mail);
                
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
                            <Label className="form-label my-2" for="name">
                                Pruduct Name
                            </Label>
                            <Input 
                                id="productName"
                                name="name"
                                placeholder="Enter Product Name"
                                type="text"
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

                            <Label className='form-label my-2' for="price">
                                Price
                            </Label>
                            <Input
                                id="price"
                                name="price"
                                placeholder="Enter Product Price"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setUser({...user,name:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="category">
                                Category
                            </Label>
                            <select className="form-select" aria-label="Default select example" id="category" onChange={(e)=>{
                                    setUser({...user,gender:e.target.value})
                                }}>
                                <option selected value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                            </select>
                            <Button className='my-2 w-100' type='submit' color='primary'>Save</Button>
                    </Form>
                   
                </Col>
                </Row>
            
            </Container>
   
        </div>
    )
}

export default AddProduct;