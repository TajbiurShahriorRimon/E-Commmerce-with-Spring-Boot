import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import SiteCustomerProductForReview from "../Body/SiteCustomerProductForReview";

class CustomerProductForReview extends Component<any, any>{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <SiteCustomerProductForReview/>
            </div>
        );
    }
}
export default CustomerProductForReview;