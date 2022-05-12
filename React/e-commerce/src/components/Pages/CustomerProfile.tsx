import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteCustomerProfile from "../Body/siteCustomerProfile";

class CustomerProfile extends Component<any, any>{
    render() {
        return (
            <div>
                <CustomerNavbar/>
                <SiteCustomerProfile/>
            </div>
        )
    }
}

export default CustomerProfile;