import React from "react";
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavLink = ({ 
    links,
    callToAction 
}) => {

    return(
        <Navbar 
            bg="white" 
            className="border border-1 p-4 shadow-sm" 
            expand="xl"
            // fixed="top"
        >
            <div className="container-lg d-flex justify-content-md-between justify-content-sm-center align-items-center">
                <Navbar.Brand href="#hero-banner" className="col-4">
                    <img
                        alt="ambiance-logo"
                        src="/logo.png"
                        className="d-inline-block align-top img-fluid h-50"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="col-1"/>
                <Navbar.Collapse id="basic-navbar-nav" className="me-0">
                    <Nav className="d-flex justify-content-evenly col-auto">
                        {
                            links.map((item, index) => {
                                return (
                                    <Nav.Link  
                                        href={`#${item.toLowerCase().split(' ').join('-')}`} 
                                        className="fs-6 fw-normal"
                                        key={index}
                                    >
                                        {item}
                                    </Nav.Link >
                                )
                            })
                        }
                        <Button variant="outline-warning" size="sm">
                            {callToAction}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavLink;