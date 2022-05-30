import React, {Component} from "react";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import {Button,Form,FormGroup,Label,Container,Input,Row,Col,Table,FormFeedback} from "reactstrap";
import {ImCart, ImHeart} from "react-icons/im";
import {Badge} from "reactstrap";
import NumericInput from "react-numeric-input";
import StarRatings from 'react-star-ratings';
import axios from "axios";
import base_url from "../../api/bootapi";
import {Link} from "react-router-dom";
import { any } from "prop-types";



class EditProduct extends Component<any, any>{
    constructor(props : any) {
        super(props);
    }

    state={
        product:{
        productId:"",
        productName:"",
        price:"",
        //categoryId:"", //changes made
        category: {
            categoryId: "",
            categoryName:"",
            status:""
        },
        vendor:{
            id:"",
            registrationNumber:"",
            shopPhone:"",
            shopAddress:"",
            shopName:"",
            user:{
                name:"",
                mail:"",
                phone:"",
                address:"",
                gender:"",
                type:""
            }
        },
        description:"",
        thumbnail: "",
        
        },
        categories:["",""]
    }

   

    async componentDidMount() {

        console.log("2222");
        let params:string[] = window.location.pathname.split("/");
        let id=params.pop()!;

        const resp = await axios.get(`${base_url}product/${id}`); 

        console.log(resp.data);
        await this.setState({
            product:resp.data
        });
        console.log(this.state.product);

        //get all categories from server
        const resp2 = await axios.get(`${base_url}category`); 

        console.log(resp2.data);
        await this.setState({
            categories:resp2.data
        });
    }


    render(){
        return(
            <div >
            <Container >
            <Row className='justify-content-center my-5'>
                <Col md={4}>
                    <Form  >
                            <Label className="form-label my-2" for="name">
                                Product Name
                            </Label>
                            
                            <Input 
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                                type="text"
                                className='form-control'
                                value={this.state.product.productName}
                                disabled
                                onChange={(e)=>{
                                    this.state.product.productName=e.target.value}}
                            >
                               
                            </Input>
                                

                            <Label className='form-label my-2' for="price">
                                Price
                            </Label>
                            <Input
                                id="price"
                                name="price"
                                placeholder="Enter Product Price"
                                type="text"
                                className='form-control'
                                value={this.state.product.price}
                                onChange={(e)=>{
                                    this.state.product.price=e.target.value}}
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
                                value={this.state.product.description}
                                style={{width: 400, height: 100}}
                                onChange={(e)=>{
                                    this.state.product.description=e.target.value}}
                                
                            />

                            <Label className='form-label my-2' for="category">
                                Category
                            </Label>
                            <Label className='form-label my-2' for="category">
                                Category
                            </Label>
                            <select className="form-select" aria-label="Default select example" id="category" 
                            onChange={(e)=>{
                                    this.state.product.category.categoryId=e.target.value
                                }}>
                                <option selected hidden>{this.state.product.category.categoryName}</option>
                                {
                                    this.state.categories.map((item : any) => (
                                        <option key={item.categoryId} value={item.categoryId}>
                                            {item.categoryName}
                                        </option>
                                    ))
                                }
                            </select>
                            {/* <Input 
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                                type="text"
                                className='form-control'
                                value={this.state.product.category.categoryName}
                                disabled
                                onChange={(e)=>{
                                    this.state.product.productName=e.target.value}}
                            />
                        <Label className='form-label my-2' for="photo">
                        Thumbnail
                        </Label> */}
                        <div>
                            <img src={"data:image/png;base64,"+this.state.product.thumbnail} id="photoSrc" style={{height: 200, width: 300}}/>
                            <Input
                                accept="image/*"
                                id="thumbnail"
                                name="thumbnail"
                                type="file"
                                className='form-control'
                               // onChange={AddPhoto}
                            />
                        </div> 

                        {/*<Label className='form-label my-2' for="otherImage">
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
                            />*/}
                            <Button className='my-2 w-100' type='submit' color='primary'>Save</Button>
                    </Form>
                   
                </Col>
                </Row>
            
            </Container>
   
        </div>
        )
    }
}

export default EditProduct;
