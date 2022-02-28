import React from 'react';
import {Button, Col, Input, Nav, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";







function Navbar(){
    return(
        <div>
            
            <div className='container-md'>
             
                <nav className='navbar navbar-expand-md navbar-light'>


                      
                   
                        <a href='#' className='navbar-brand logo'>Dokan</a>
                       
                        <form className=' form-line bar'>
                                <input 
                                className='form-control ' 
                                type='search' 
                                placeholder='Search'
                                aria-label='Search'
                                ></input>
                        </form>
                         
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target='#toggleMobileMenu'
                            aria-controls='toggleMobileMenu'
                            aria-expanded='false'
                            aria-label='Toggle Navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    
                   
                    <div  className='collapse navbar-collapse' id='toggleMobileMenu'>
                        <ul className='nav navbar-nav navbar-dark ms-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href=' #'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>SignUp/Login</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                       
                        
                </nav>
            </div>
            
        </div>
    )
}

export default Navbar;