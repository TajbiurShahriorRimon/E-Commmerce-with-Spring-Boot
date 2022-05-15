import React, {Component, useEffect, useState} from "react";
import {Button, Card } from "react-bootstrap";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {ButtonGroup} from "reactstrap";
import StarRatings from "react-star-ratings";

class SiteProductReviews extends Component<any, any>{
    state = {
        data: (<button>hello</button>),
        test: "12"
    }
    render() {
        return(
            <div className='container'>
                <div className="form-control">
                    <div className="row">
                        <div className="col-md-5">
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
                            </div> <br/>
                            <h4>Jeans Pant</h4>
                        </div>
                        <div className="col-md-7" style={{overflow: "auto", height: 400}}>
                            <Card>
                                <Card.Header>
                                    <strong>Asif Ahmed</strong><br/>
                                    Rating: 3.7 <br/>
                                    <StarRatings
                                        rating={3.7}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        starRatedColor="#cee009"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <button style={{float: "right"}}
                                            className="btn-danger rounded-end btn"
                                            hidden={this.state.test == "12434" ? true : false}
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>

                            <Card>
                                <Card.Header>
                                    <strong>Asif Ahmed</strong><br/>
                                    Rating: 3.7 <br/>
                                    <StarRatings
                                        rating={3.7}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        starRatedColor="#cee009"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <button style={{float: "right"}}
                                            className="btn-danger rounded-end btn"
                                            hidden={this.state.test == "12434" ? true : false}
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>
                            <Card>
                                <Card.Header>
                                    <strong>Asif Ahmed</strong><br/>
                                    Rating: 3.7 <br/>
                                    <StarRatings
                                        rating={3.7}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        starRatedColor="#cee009"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <button style={{float: "right"}}
                                            className="btn-danger rounded-end btn"
                                            hidden={this.state.test == "12434" ? true : false}
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>
                            <Card>
                                <Card.Header>
                                    <strong>Asif Ahmed</strong><br/>
                                    Rating: 3.7 <br/>
                                    <StarRatings
                                        rating={3.7}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        starRatedColor="#cee009"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <button style={{float: "right"}}
                                            className="btn-danger rounded-end btn"
                                            hidden={this.state.test == "12434" ? true : false}
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        )
    }
}

export default SiteProductReviews