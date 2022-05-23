import React, {Component} from "react";
import {Badge} from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';
import {Link} from "react-router-dom";
import axios from "axios";
import base_url from "../../api/bootapi";

class AddProductReview extends Component<any, any>{
    state = {
        initialRating: 0,
        review: "",
        reviewDetailsErr: "",
        ratingErr: "",

        reviewAndRating: {
            id: "",
            rating: 0,
            value: "",
            customer: {
                id: localStorage.getItem("userId_session")//0 //Local_Storage session_userId
            },
            product: {
                productId: window.location.pathname.split("/").pop()
            }
        }
    }

    addRating = (rate: number) => {
        this.setState({
            initialRating: rate
        })
        //alert(rate/20);
    }

    handleInput = (e: any) => {
        this.setState({
            review : e.target.value
        })
    }

    click = async (e: any) => {
        //window.location.replace("/login");
        if(this.state.review == ""){
            this.setState({
                reviewDetailsErr: "Review Description cannot be empty..."
            })
            return;
        }
        else {
            this.setState({
                reviewDetailsErr: ""
            })
        }
        if(this.state.initialRating == 0){
            this.setState({
                ratingErr: "Give a rating..."
            })
            return;
        }
        else {
            this.setState({
                ratingErr: ""
            })
        }

        if(this.state.ratingErr == "" && this.state.reviewDetailsErr == ""){
            var productId = window.location.pathname.split("/").pop();
            var starRating = (this.state.initialRating)/20;

            this.state.reviewAndRating.value = this.state.review;
            this.state.reviewAndRating.rating = starRating;
            this.state.reviewAndRating.customer.id = localStorage.getItem("userId_session"); //Local_Storage

            const resp = await axios.post(`${base_url}reviewAndRating`, this.state.reviewAndRating);
            if(resp.status == 201){
                alert("Review Added");
                window.location.replace("/product/allReviews/"+window.location.pathname.split("/").pop())
            }
        }
    }

    /*handleText = (e: any) => {
        //e.preventDefault();
        this.setState({
            review : e.target.value
        })
    }*/

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-8">
                        <div className="form-control" style={{backgroundColor: "#e4ede6"}}>
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
                                    <div>
                                        <Rating onClick={this.addRating} ratingValue={this.state.initialRating}
                                                initialValue={this.state.initialRating}
                                                allowHalfIcon={true}
                                                transition={true}
                                        />
                                    </div>
                                    <div className="text-danger">
                                        {this.state.ratingErr}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div><br/><br/>
                                    <textarea name="message" id="message" onChange={this.handleInput}
                                          cols={10} rows={5}
                                          placeholder="Enter Review Details Here..."
                                          value={this.state.review}
                                          style={{width: 400, height: 100}}
                                    >
                                    </textarea>
                                    <div className="text-danger">
                                        {this.state.reviewDetailsErr}
                                    </div>
                                    <br/>
                                    <button onClick={this.click} className="btn-dark btn">Submit Review</button>
                                </div>
                            </div>
                            <div>
                                <br/><br/>
                                <Link to={`/product/allReviews/${window.location.pathname.split("/").pop()}`}>
                                    <button className="btn btn-secondary">Check All Reviews</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProductReview;