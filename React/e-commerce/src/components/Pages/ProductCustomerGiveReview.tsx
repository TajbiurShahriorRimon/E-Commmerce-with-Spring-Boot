import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import AddProductReview from "../Body/AddProductReview";

class ProductCustomerGiveReview extends Component<any, any>{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <AddProductReview/>
            </div>
        )
    }
}

export default ProductCustomerGiveReview;