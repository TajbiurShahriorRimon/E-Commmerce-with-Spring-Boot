import React from 'react';
import {Button, Col, Input, Nav, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";
import icon from "./images/search2.svg";
import { Card } from 'react-bootstrap';









function VendorNavbar(){
    return(
        <div>
            
            <div className='nav-body' 
            >
                <h5> Dokan</h5>
                <div className='search-box'>
                    <input className='search-bar' type='text' placeholder='Type to search'></input>
                    <a className='search-btn'>
                    <img src={icon}/>
                    </a>
                </div>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='/vProfile' >Profile</a></li>
                        <li><a href='//vShopInfo'>Shop Info</a></li>
                        <li><a href='#' >Products</a></li>
                        <li><a href='#' >Sales Report</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default VendorNavbar;