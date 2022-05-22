import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import React from "react";
import SiteProductReview from "../Body/siteProductReviews";
import HomeNavbar from "../Navbar/HomeNavbar";

function ProductReviews() {
    return(
        <div >
            <CustomerNavbar/>
            <HomeNavbar/>
            <SiteProductReview/>
        </div>
    )
}

export default ProductReviews;