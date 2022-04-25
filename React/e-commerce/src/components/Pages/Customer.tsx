import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import CustomerHome from "../Body/CustomerHome";

class Customer extends Component<any, any>{
    render() {
        return (
            <div>
                <CustomerNavbar/>
                <CustomerHome/>
            </div>
        )
    }
}

export default Customer;