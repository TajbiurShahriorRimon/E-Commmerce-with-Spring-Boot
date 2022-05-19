import React, {Component, useEffect, useState} from "react";
import {Card, Carousel, Nav, Navbar} from "react-bootstrap";
import {CgNotes, CgProfile} from "react-icons/cg";
import {Button} from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {HiInformationCircle} from "react-icons/hi";

class SiteShoppingCart extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    state = {
        result: [],
        resultData: [],
        totalPrice: "",
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:9090/products');
        console.log(resp);
        if (resp.status === 200){
            this.setState({
                result: resp.data,
                loading: false,
            })
        }

        if (localStorage.getItem("shoppingCart") != null) {
            var ara = JSON.parse(localStorage.getItem("shoppingCart") || '{}');
            var i, totalProductPrice = 0;
            for(i = 0; i < ara.length; i++){
                totalProductPrice += ara[i].product_price * ara[i].unit;
            }
            this.setState({
                resultData: ara,
                totalPrice: totalProductPrice,
                loading: false,
            })
        }
    }

    removeProductFromCart = (prodId: any) => {
        var array = JSON.parse(localStorage.getItem("shoppingCart") || '{}');
        //If there is only one product then remove the whole session
        if(array.length == 1){
            array.splice(i, 1);
            this.setState({
                resultData: [],
                loading: false,
                totalPrice: ""
            })
            localStorage.removeItem("shoppingCart"); //removing the shopping cart session
            return;
        }
        console.log(array);
        var i, j;
        var totalProductPrice = 0;
        //If there is more than one product then check the array that which product is going to be removed
        for(i = 0; i < array.length; i++){
            if(array[i].product_id == prodId){
                array.splice(i, 1); //removing the object from the array
                //Now update the product price
                for(j = 0; j < array.length; j++){
                    totalProductPrice += array[j].product_price * array[j].unit;
                }
                //console.log("after removing");
                console.log(array);
                this.setState({
                    resultData: array,
                    loading: false,
                    totalPrice: totalProductPrice
                })
                localStorage.setItem("shoppingCart", JSON.stringify(array));
                console.log(JSON.parse(localStorage.getItem("shoppingCart") || '{}'))
                break;
            }
        }
    }

    render() {
        var resultTable;

        if(this.state.loading){
            resultTable = <h1>Loading...</h1>
        }
        else {
            resultTable = this.state.resultData.map((item : any) => {
                return(
                    <div>
                        <div className="form-control" style={{color: "rebeccapurple", backgroundColor: "lightcoral"}}>
                            <label htmlFor="">Product Name</label>
                            <div><strong>{item.product_name}</strong></div> <hr/>
                            <label htmlFor="">Category</label>
                            <div><strong>{item.product_category_name}</strong></div> <hr/>
                            <label htmlFor="">Price</label>
                            <div><strong>{item.product_price}</strong></div> <hr/>
                            <label htmlFor="">Unit</label>
                            <div><strong>{item.unit}</strong></div> <hr/>
                            <button className="btn btn-outline-warning btn-dark" onClick={() => this.removeProductFromCart(item.product_id)}>
                                Remove from Cart
                            </button>
                            <Link to={`/product/productDetails/${item.product_id}`}>
                                <button className="btn btn-outline-info btn-danger">Check Details</button>
                            </Link>
                        </div> <br/> <br/>
                    </div>
                )
            })
        }
        var imagePath = "https://www.w3schools.com/html/img_girl.jpg";
        return (
            <div className="form-control container" style={{width: 700}}>
                <div className="row">
                    <div className="col-md-12">
                        {resultTable}
                    </div>
                    <hr/>
                    <button disabled={true} hidden={this.state.totalPrice == "" ? true : false} className="btn btn-primary">
                        <strong>Total Price: {this.state.totalPrice}</strong>
                    </button>
                    <button hidden={this.state.totalPrice == "" ? true : false} className="btn btn-dark">
                        Confirm Order
                    </button>
                </div>
            </div>
        );
    }
}

export default SiteShoppingCart;