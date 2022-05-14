import React, {Component, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Badge} from "react-bootstrap";
import { Button } from "reactstrap";

class SiteCustomerProductForReview extends Component<any, any>{
    changeRoute = () => {
        window.location.href = "/product/customer/giveReview/2";
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-8">
                        <div className="form-control" style={{height: 100, backgroundColor: "#e4ede6"}}>
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="form-group">
                                        <img src="https://www.w3schools.com/html/img_girl.jpg" alt="test"
                                             style={
                                                 {  height: 70,
                                                     width: 50
                                                 }
                                             }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Jeans Chino Cut</label>
                                    <br/> <Badge>Jeans</Badge>
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                    <button onClick={this.changeRoute} style={{width: 200}} className="btn-outline-info rounded-3 btn">
                                        <strong>Give Review</strong>
                                    </button>
                                </div>
                            </div>
                        </div> <br/>
                    </div>

                    <div className="col-md-3">
                    </div>
                    <div className="col-md-8">
                        <div className="form-control" style={{height: 100, backgroundColor: "#e4ede6"}}>
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="form-group">
                                        <img src="https://www.w3schools.com/html/img_girl.jpg" alt="test"
                                             style={
                                                 {  height: 70,
                                                     width: 50
                                                 }
                                             }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Black T-Shirt</label>
                                    <br/> <Badge>Shirt</Badge>
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                    <button style={{width: 200}} className="btn-outline-info rounded-3 btn">
                                        <strong>Check Your Review</strong>
                                    </button>
                                </div>
                            </div>
                        </div> <br/>
                    </div>
                </div>
            </div>
        )
    }
}
export default SiteCustomerProductForReview;