import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteProductDetails from "../Body/siteProductDetails";
import HomeNavbar from "../Navbar/HomeNavbar";

class ProductDetails extends Component<any, any>{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <HomeNavbar/>
                <SiteProductDetails/>
            </div>
        )
    }
}

export default ProductDetails;