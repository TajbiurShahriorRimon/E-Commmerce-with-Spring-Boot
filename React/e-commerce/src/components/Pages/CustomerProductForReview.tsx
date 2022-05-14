import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteCustomerProductForReview from "../Body/SiteCustomerProductForReview";
import { useNavigate } from "react-router-dom";


const CustomerProductForReview = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        var sig = 0;
        if (sig == 1){
            alert("dsd");
            navigate("/product/customer/giveReview/2");
        }
    }

    return (
        <div onLoad={handleClick}>
            <CustomerNavbar/>
            <SiteCustomerProductForReview/>
        </div>
    );
}

export default CustomerProductForReview;
