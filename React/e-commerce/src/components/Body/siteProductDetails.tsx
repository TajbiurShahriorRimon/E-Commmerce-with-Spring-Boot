import React, {Component} from "react";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import {Button, ButtonGroup} from "reactstrap";
import {ImCart, ImHeart} from "react-icons/im";
import {Badge} from "reactstrap";
import NumericInput from "react-numeric-input";
import StarRatings from 'react-star-ratings';

class SiteProductDetails extends Component<any, any>{
    render() {
        var imageArray = [
            "https://thumbs.dreamstime.com/b/flowers-4999705.jpg",
            "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
        ]
        const imagePath = "https://www.w3schools.com/html/img_girl.jpg";
        return(
            <div className="container">
                <br/> <br/>
                <div className="form-control">
                    <div className="row">
                        <div className="col-md-5" style={{backgroundColor:"mistyrose"}}>
                            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', backgroundColor: "mistyrose"}}>
                                <TransformWrapper initialScale={1}>
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>

                                            <TransformComponent>
                                                <img src="https://www.w3schools.com/html/img_girl.jpg" alt="test"
                                                     style={
                                                         {  height: 300,
                                                             width: 250
                                                         }
                                                     }
                                                />
                                            </TransformComponent>
                                            <div>
                                                <ButtonGroup className="me-2" aria-label="Second group">
                                                    <Button onClick={() => zoomIn()} className="btn-dark btn">+</Button>
                                                    <Button onClick={() => zoomOut()} className="btn btn-dark">-</Button>
                                                    <Button onClick={() => resetTransform()} className="btn btn-outline-danger">X</Button>
                                                </ButtonGroup>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-3" style={{border: "solid", backgroundColor: "mistyrose"}}>
                                    <TransformWrapper initialScale={1}>
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <React.Fragment>
                                                <TransformComponent>
                                                    <img src={imageArray[0]} alt="test"
                                                         style={
                                                             {  height: 200,
                                                                 width: 120
                                                             }
                                                         }
                                                    />
                                                </TransformComponent>
                                                <div className="tools">
                                                    <ButtonGroup className="me-2" aria-label="Second group">
                                                        <Button onClick={() => zoomIn()} className="btn-dark btn">+</Button>
                                                        <Button onClick={() => zoomOut()} className="btn btn-dark">-</Button>
                                                        <Button onClick={() => resetTransform()} className="btn btn-outline-danger">X</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                                <div className="col-md-3" style={{border: "solid", backgroundColor: "mistyrose"}}>
                                    <TransformWrapper initialScale={1}>
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <React.Fragment>
                                                <TransformComponent>
                                                    <img src={imageArray[1]} alt="test"
                                                         style={
                                                             {  height: 200,
                                                                 width: 120
                                                             }
                                                         }
                                                    />
                                                </TransformComponent>
                                                <div className="tools">
                                                    <ButtonGroup className="me-2" aria-label="Second group">
                                                        <Button onClick={() => zoomIn()} className="btn-dark btn">+</Button>
                                                        <Button onClick={() => zoomOut()} className="btn btn-dark">-</Button>
                                                        <Button onClick={() => resetTransform()} className="btn btn-outline-danger">X</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                                <div className="col-md-3" style={{border: "solid", backgroundColor: "mistyrose"}}>
                                    <TransformWrapper initialScale={1}>
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <React.Fragment>

                                                <TransformComponent>
                                                    <img src={imageArray[0]} alt="test"
                                                         style={
                                                             {  height: 200,
                                                                 width: 120
                                                             }
                                                         }
                                                    />
                                                </TransformComponent>
                                                <div className="tools">
                                                    <ButtonGroup className="me-2" aria-label="Second group">
                                                        <Button onClick={() => zoomIn()} className="btn-dark btn">+</Button>
                                                        <Button onClick={() => zoomOut()} className="btn btn-dark">-</Button>
                                                        <Button onClick={() => resetTransform()} className="btn btn-outline-danger">X</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </TransformWrapper>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div>
                                <label><strong>Product Name:</strong> Jeans Blue Faded</label>
                            </div>
                            <div>
                                <label><strong>Price:</strong> <label style={{fontSize: 20}}>Tk 100</label></label>
                            </div>
                            <div>
                                <label><strong>Category</strong>: <Badge pill bg="success"><strong> Jeans</strong> </Badge></label>
                            </div>
                            <div>
                                <label><strong>Vendor:</strong> Ariful</label>
                            </div>
                            <div>
                                <label style={{fontSize:"1.2em"}}><strong>Rating:</strong> 3.7 </label>
                                <br/>
                                <StarRatings
                                    rating={3.7}
                                    starDimension="25px"
                                    starSpacing="5px"
                                    starRatedColor="#cee009"
                                />
                            </div>
                            <br/>

                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn-outline-danger btn"><strong>Add To Cart</strong> <ImCart/></button>
                                </div>
                                <div className="col-md-2">
                                    <span>
                                        <NumericInput size={2} min={0} max={5}
                                            onKeyDown={(e)=>{
                                                e.preventDefault();
                                            }}
                                        />
                                    </span>
                                    <button className="btn btn"><ImHeart style={{fontSize:"1.5em"}}/></button>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <h2><u>Product Description</u></h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="hidden" id="id"/>
                                <label htmlFor="name">Company Name</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="nameInBangla">Name In Bngla</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="nameInBangla">Name In Bngla</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }
}

export default SiteProductDetails
