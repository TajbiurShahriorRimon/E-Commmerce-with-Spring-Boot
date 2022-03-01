import React from 'react';
import {Button, Col, Input, Nav, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";
import icon from "./images/search.svg";









function Navbar(){
    return(
        <div>
            
           <div className='nav-body md'>
                <h5> Dokan</h5>
                <div className='search-box'>
                    <input className='search-bar' type='text' placeholder='Type to search'></input>
                    <a className='search-btn'>
                    <img src={icon}/>
                    </a>
                </div>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='#' >Home</a></li>
                        <li><a href='#' >Contact</a></li>
                        <li><a href='#' >About</a></li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default Navbar;