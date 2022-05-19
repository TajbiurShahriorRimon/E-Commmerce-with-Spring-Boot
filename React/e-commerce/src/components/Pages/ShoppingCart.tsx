import {useNavigate} from "react-router-dom";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteCustomerProductForReview from "../Body/SiteCustomerProductForReview";
import React from "react";
import SiteShoppingCart from "../Body/siteShoppingCart";

const ShoppingCart = () => {
    const navigate = useNavigate();

    const handleClick = () => { // call back function

    }

    return (
        <div onLoad={handleClick}>
            <CustomerNavbar/>
            <SiteShoppingCart/>
        </div>
    );
}

export default ShoppingCart;