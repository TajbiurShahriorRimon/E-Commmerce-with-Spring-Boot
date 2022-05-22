import React, {useEffect, useState} from "react";
import {NavDropdown, Container, Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {ImSearch, ImHeart} from "react-icons/im";
import {HiOutlineLogout} from "react-icons/hi";
import {CgProfile, CgShoppingCart, CgBox, CgHome} from "react-icons/cg";
import {MdReviews} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";

export const AdminNavbar = () => {
    var navigate = useNavigate();

    const [search,setSearch]=useState({
        searchField: ""
    })
    const searchProducts = () => {
        localStorage.setItem("searchProductSession", search.searchField);
        //alert("dds");
        //navigate("/customer/index");
        window.location.href = "/customer/index";
    }

    const [adminNav,setAdminNav]=useState({
        adminNavbar: (<div></div>)
    })

    useEffect(() => {
        if (localStorage.getItem("userType_session") == "admin"){
            setAdminNav({
                adminNavbar: (
                    <div>
                        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="navbar text-opacity-100">
                            <Container>
                                <Navbar.Brand href="#home">Dokan</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="justify-content-center" style={{ flex: 1}}>
                                        <Form className="d-flex align-content-md-center position-fixed">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                                onChange={(e)=>{
                                                    setSearch({searchField:e.target.value})
                                                }}
                                            />
                                            <Button onClick={searchProducts} variant="outline-success"><ImSearch/></Button>
                                        </Form>
                                        <Nav.Link href="" className="d-flex"> <CgShoppingCart style={{fontSize:"1.5em"}}/> </Nav.Link>
                                    </Nav>
                                    <Nav.Link href="/customer/index">Home</Nav.Link>
                                    {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/customer/profile">My Account <CgProfile style={{color:"blue"}}/></NavDropdown.Item>
                                        {/*<NavDropdown.Item href="#action/3.3">My Orders <CgBox/> </NavDropdown.Item>*/}
                                        <div className="dropdown-item">
                                            <Link to={"/order/pending"}>
                                                Pending Orders
                                            </Link>
                                        </div>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/logout">Log Out <HiOutlineLogout style={{color:"red"}}/></NavDropdown.Item>
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

    return (
        <div>
            {adminNav.adminNavbar}
        </div>
    )
}