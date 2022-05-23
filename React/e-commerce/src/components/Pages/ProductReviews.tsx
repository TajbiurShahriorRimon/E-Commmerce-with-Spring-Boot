import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import React from "react";
import SiteProductReview from "../Body/siteProductReviews";
import HomeNavbar from "../Navbar/HomeNavbar";
import {AdminNavbar} from "../Navbar/AdminNavbar";

function ProductReviews() {
    return(
        <div >
            <CustomerNavbar/>
            <HomeNavbar/>
            <AdminNavbar/>
            <SiteProductReview/>
        </div>
    )
}

export default ProductReviews;