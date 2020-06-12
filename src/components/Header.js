import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Style.css';
import logo from '../images/logo.svg';

function NavBar() {
    return (
        <Navbar className="nav-bg" expand="lg">
            <Navbar.Brand href="#home" ><img src={ logo } alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links">
                    <Nav.Link className="mr-3"  href="/">Home</Nav.Link>
                    <Nav.Link className="mr-3"  href="">Subject</Nav.Link>
                    <Nav.Link className="mr-3"  href="">Dashboard</Nav.Link>
                    <Nav.Link className="sign text-primary border border-primary rounded px-3 mr-3" href="">Sign In</Nav.Link>
                    <Nav.Link className="sign text-white rounded bg-primary px-3"  href="signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;