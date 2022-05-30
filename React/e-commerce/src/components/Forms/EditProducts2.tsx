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
        categories:["",""],
        photoUrl:"data:image/png;base64,"

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
        this.setState({
            photoUrl:this.state.photoUrl+this.state.product.thumbnail
        })
        //get all categories from server
        const resp2 = await axios.get(`${base_url}category`); 

        console.log(resp2.data);
        await this.setState({
            categories:resp2.data
        });
    }
    updateProduct=()=>{
        this.addProduct();

        setTimeout(() => { this.addImage(this.state.product.thumbnail); }, 3000);
    }

    //save product to server
    addProduct = ( )=> {
        
        axios.post(`${base_url}addProducts`,this.state.product,{
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }}).then(
            (response)=>{
                    alert("Product updated");
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
        //alert(this.state.unit);
    }
    //send image to server
    addImage = (data: any) => {
        axios.post(`${base_url}updateImage/${this.state.product.productId}`,data,{
        }).then(
         (response)=>{
                 alert("image updated");
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
    }
    //add image to state after it has been selected
     addPhotoToSTate = async(e:any) => {
        let image = e.target.files[0];
        console.log(this.state.photoUrl)
        console.log(URL.createObjectURL(image))
         await this.setState({
            
            thumbnail:URL.createObjectURL(image),
            photoUrl:URL.createObjectURL(image)
        });
        console.log(this.state.photoUrl)
        console.log(this.state.product.thumbnail)
    }
    render(){
        return(
            <div >
            <Container >
            <Row className='justify-content-center my-5'>
                <Col md={4}>
                    <Form  onSubmit={this.updateProduct}>
                            <Label className="form-label my-2" for="name">
                                Product Name
                            </Label>
                            
                            <Input 
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                                type="text"
                                className='form-control'
                                defaultValue={this.state.product.productName}
                                
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
                                defaultValue={this.state.product.price}
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
                                defaultValue={this.state.product.description}
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
                            <img src={this.state.photoUrl} id="photoSrc" style={{height: 200, width: 300}}/>
                            <Input
                                accept="image/*"
                                id="thumbnail"
                                name="thumbnail"
                                type="file"
                                className='form-control'
                                onChange={this.addPhotoToSTate}
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
