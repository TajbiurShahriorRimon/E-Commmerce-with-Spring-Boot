import React, { useState } from 'react';
import logo from './logo.svg';
//import '../../App.css';
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,FormFeedback} from "reactstrap";
import { group } from 'console';
import { useEffect } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';
import events from "node:events";
/* TODO
1) Response message misbehaves somtimes
 */




function AddProduct(props:any){

    
    useEffect(()=>{

    },[]);
    const [products,setProducts]=useState({
        productName:"",
        price:"",
        categoryId:"",
        vendorId:"",
        description:"",
        photoUrl:"",
        thumbnail: "", //used to set the photo blob path of the selected photo
        otherImage : [] //for multiple selected photo
    });

    const AddPhoto = (e:any) => {
        let image = e.target.files[0];
        setProducts({
            ...products,
            thumbnail: image,
            photoUrl: URL.createObjectURL(image) //displays the image in the image box
        });
        e.preventDefault();
    }

    const AddOtherImages = (e:any) => {
        let images = e.target.files;
        setProducts({
            ...products,
            otherImage: images
        });
    }

    const handleForm=(e:any)=>{
        console.log(products);

        
        postDataToServer(JSON.stringify(products));
        e.preventDefault();
    }

    //function to post data on server
    const postDataToServer=(data:any)=>{
        axios.post(`${base_url}addProducts`,data,{
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
                            <Label className="form-label my-2" for="name">
                                Product Name
                            </Label>
                            <Input 
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                                type="text"
                                className='form-control'
                                onChange={(e)=>{
                                    setProducts({...products,productName:e.target.value})
                                }}
                            />

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
                                    setProducts({...products,price:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="description">
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                placeholder="Enter Product Description"
                                type="text"
                                className='form-control'
                                style={{width: 400, height: 100}}
                                onChange={(e)=>{
                                    setProducts({...products,description:e.target.value})
                                }}
                            />

                            <Label className='form-label my-2' for="category">
                                Category
                            </Label>
                            <select className="form-select" aria-label="Default select example" id="category" onChange={(e)=>{
                                    setProducts({...products,categoryId:e.target.value})
                                }}>
                                <option selected value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                            </select>
                        <Label className='form-label my-2' for="photo">
                        Thumbnail
                        </Label>
                        <div>
                            <img src={products.photoUrl} id="photoSrc" style={{height: 200, width: 300}}/>
                            <Input
                                accept="image/*"
                                id="thumbnail"
                                name="thumbnail"
                                type="file"
                                className='form-control'
                                onChange={AddPhoto}
                            />
                        </div>

                        <Label className='form-label my-2' for="otherImage">
                            Other Images
                        </Label>
                        <Input
                            accept="image/*"
                            id="otherImage"
                            name="otherImage"
                            type="file"
                            className='form-control'
                            multiple
                            onChange={AddOtherImages}
                        />
                            <Button className='my-2 w-100' type='submit' color='primary'>Save</Button>
                    </Form>
                   
                </Col>
                </Row>
            
            </Container>
   
        </div>
    )
}

export default AddProduct;
