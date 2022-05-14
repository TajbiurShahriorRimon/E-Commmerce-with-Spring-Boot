import React, {Component} from "react";
import {Badge} from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';

class AddProductReview extends Component<any, any>{
    state = {
        initialRating: 0,
        review: ""
    }

    addRating = (rate: number) => {
        this.setState({
            initialRating: 4
        })
        alert(rate/20);
    }

    handleInput = (e: any) => {
        this.setState({
            review : e.target.value
        })
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
                                                allowHalfIcon={true}
                                                transition={true}
                                        />
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
                                    </textarea> <br/> <br/>
                                    <button className="btn-dark btn">Submit Review</button>
                                </div>
                            </div>
                            <div>
                                <br/><br/>
                                <button className="btn btn-secondary">Check All Reviews</button>
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