import React from "react";
import {NavDropdown, Container, Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {ImSearch, ImHeart} from "react-icons/im";
import {HiOutlineLogout} from "react-icons/hi";
import {CgProfile, CgShoppingCart, CgBox} from "react-icons/cg";
import {MdReviews} from "react-icons/md";

export const CustomerNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="navbar text-opacity-100">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}}>
                            <Form className="d-flex align-content-md-center position-fixed">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success"><ImSearch/></Button>
                            </Form>
                            <Nav.Link href="" className="d-flex"> <CgShoppingCart style={{fontSize:"1.5em"}}/> </Nav.Link>
                        </Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Mr XYZ" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/customer/profile">My Account <CgProfile style={{color:"blue"}}/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Wishlist <ImHeart/> </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">My Orders <CgBox/> </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">My Reviews <MdReviews/> </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Log Out <HiOutlineLogout style={{color:"red"}}/></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/> <br/> <br/>
        </div>
    )
}