import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteCustomerProfile from "../Body/siteCustomerProfile";

function CustomerProfile(){
    return (
        <div>
            <CustomerNavbar/>
            <SiteCustomerProfile/>
        </div>
    )
}

export default CustomerProfile;