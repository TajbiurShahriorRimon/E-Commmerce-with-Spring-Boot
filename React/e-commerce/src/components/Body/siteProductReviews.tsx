import React, {Component, useEffect, useState} from "react";
import {Button, Card } from "react-bootstrap";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {ButtonGroup} from "reactstrap";
import StarRatings from "react-star-ratings";
import axios from "axios";
import base_url from "../../api/bootapi";
import {Link} from "react-router-dom";
import {HiInformationCircle} from "react-icons/hi";

class SiteProductReviews extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    state = {
        //data: (<button>hello</button>),
        //test: "12",
        result: [],
        productName: "",
        loading: false
    }

    async componentDidMount() {
        var id = window.location.pathname.split("/").pop();
        const resp = await axios.get(`${base_url}product/getReviewsAndRatings/${id}`);
        console.log(resp);

        if (resp.status === 200){
            this.setState({
                result: resp.data,
                productName: resp.data[0].product.productName,
                loading: false,
            })
        }
    }

    render() {

        var resultTable;

        if(this.state.loading){
            resultTable = <h1>Loading...</h1>
        }
        else {
            if (this.state.result.length == 0){
                resultTable = <h2>No Review...</h2>
            }
            else {
                resultTable = this.state.result.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <Card>
                                <Card.Header>
                                    <strong>{item.customer.mail.name}</strong><br/>
                                    Rating: 3.7 <br/>
                                    <StarRatings
                                        rating={item.rating}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        starRatedColor="#cee009"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        {item.value}
                                    </Card.Text>
                                    <button style={{float: "right"}}
                                            className="btn-danger rounded-end btn"
                                        /*hidden={this.state.test == "12434" ? true : false}*/
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>
                        </div>
                    )
                })
            }
        }

        var st = {
            height: "100vw",
            backgroundImage: "url("+"https://inspirationhut.net/wp-content/uploads/2013/05/201.png"+")",
            backgroundSize: "cover", backgroundRepeat: 'no-repeat'
        }
        return(
            <div style={st}>
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
                            <h4>{this.state.productName}</h4>
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
                                            /*hidden={this.state.test == "12434" ? true : false}*/
                                    >
                                        Hello button
                                    </button>
                                </Card.Body>
                            </Card> <br/>
                            {resultTable}
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SiteProductReviews