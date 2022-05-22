import React, {useEffect, useState} from 'react';
import {Col, Input, NavbarToggler, Row} from "reactstrap";
import  "./navbar.css";
import icon from "./images/search2.svg";
import {Card, Container, Form, FormControl, Navbar, Nav, Button, NavDropdown} from 'react-bootstrap';
import {ImHeart, ImSearch} from "react-icons/im";
import { CgProfile, CgBox, CgShoppingCart, CgHome, CgShoppingBag } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HomeNavbar(){

    const [homeNav,setHomeNav]=useState({
        homeNav: (<div>fdsfs</div>)
    })

    useEffect(() => {
        if (localStorage.getItem("userType_session") == null ||
            localStorage.getItem("userType_session") != "admin" ||
            localStorage.getItem("userType_session") != "vendor" ||
            localStorage.getItem("userType_session") != "customer"
        ){
            setHomeNav({
                homeNav: (
                    <div>
                        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="navbar text-opacity-100">
                            <Container>
                                <Navbar.Brand href="/home">Dokan</Navbar.Brand>
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
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <NavDropdown title="Registration" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/customerReg">Customer Registration <CgProfile style={{color:"blue"}}/></NavDropdown.Item>
                                        <NavDropdown.Item href="/vendorReg">Vendor Registration <CgHome style={{color:"red"}}/> </NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <br/> <br/> <br/>
                    </div>
                )
            })
        }
    }, [])

    return(
        <div>
            {homeNav.homeNav}
        {/*<Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="navbar text-opacity-100">
            <Container>
                <Navbar.Brand href="/home">Dokan</Navbar.Brand>
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
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <NavDropdown title="Registration" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/customerReg">Customer Registration <CgProfile style={{color:"blue"}}/></NavDropdown.Item>
                            <NavDropdown.Item href="/vendorReg">Vendor Registration <CgHome style={{color:"red"}}/> </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <br/> <br/> <br/>*/}
        </div>
    )
}

export default HomeNavbar;