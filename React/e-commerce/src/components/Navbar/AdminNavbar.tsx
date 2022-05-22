import React, {useState} from "react";
import {NavDropdown, Container, Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {ImSearch, ImHeart} from "react-icons/im";
import {HiOutlineLogout} from "react-icons/hi";
import {CgProfile, CgShoppingCart, CgBox, CgAdd, CgViewGrid} from "react-icons/cg";
import {MdReviews} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";

export const AdminNavbar = () => {
    var navigate = useNavigate();

    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="navbar text-opacity-100">
                <Container>
                    <Navbar.Brand href="/home">Dokan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}}>
                        </Nav>
                        <Nav.Link href="/admin">Home</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Nav.Link href="#">Manage Users</Nav.Link>
                        <NavDropdown title="Product Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/aAddCategory">Add Category <CgAdd style={{color:"blue"}}/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">View Categories <CgViewGrid style={{color:"green"}}/> </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/logout">Log Out <HiOutlineLogout style={{color:"red"}}/></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/> <br/> <br/>
        </div>
    )
}