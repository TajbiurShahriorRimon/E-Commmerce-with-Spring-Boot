import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteProductDetails from "../Body/siteProductDetails";

class ProductDetails extends Component<any, any>{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <SiteProductDetails/>
            </div>
        )
    }
}

export default ProductDetails;