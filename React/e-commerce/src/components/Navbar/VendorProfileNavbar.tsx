import React from 'react';
import {Button, Col, Input, Nav, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";









function VendorProfileNavbar(){
    return(
        <div>
            
            <div className='nav-body' 
            >
                <a href="/vHome" className='link'>Vendor</a>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='/vProfile' >Profile</a></li>
                        <li><a href='/vShopInfo'>Shop Info</a></li>
                        <li><a href='#' >Products</a></li>
                        <li><a href='#' >Sales Report</a></li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default VendorProfileNavbar;