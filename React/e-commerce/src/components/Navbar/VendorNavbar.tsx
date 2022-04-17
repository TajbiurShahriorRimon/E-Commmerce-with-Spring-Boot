import React from 'react';
import {Col, Input, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";
import icon from "./images/search2.svg";
import {Card, Container, Form, FormControl, Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';
import {ImHeart, ImSearch} from "react-icons/im";
import {CgBox, CgProfile, CgShoppingCart} from "react-icons/cg";
import {MdReviews} from "react-icons/md";
import {HiOutlineLogout} from "react-icons/hi";

function VendorNavbar(){
    return(
        /*<div>
            
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

        </div>*/
        <div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" style={{ flex: 1}}>
                        <Form className="d-flex align-content-center">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"><ImSearch/></Button>
                        </Form>
                    </Nav>
                    <Nav.Link href="/vProfile">Profile</Nav.Link>
                    <Nav.Link href="/vShopInfo">Shop Info</Nav.Link>
                    <Nav.Link href="#">Products</Nav.Link>
                    <Nav.Link href="#">Sales Report</Nav.Link>
                    {/*<NavDropdown title="Mr XYZ" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/vProfile">My Account <CgProfile style={{color:"blue"}}/></NavDropdown.Item>
                        <NavDropdown.Item href="/vShopInfo">My Wishlist <ImHeart/> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Product <CgBox/> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">My Reviews <MdReviews/> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log Out <HiOutlineLogout style={{color:"red"}}/></NavDropdown.Item>
                    </NavDropdown>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <br/> <br/> <br/>
        </div>
    )
}

export default VendorNavbar;