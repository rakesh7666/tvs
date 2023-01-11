import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import logo from '../../assets/images/logo-tvs.png';

class Header extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} className="logo img-fluid" alt="TVS Bike" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="nav-menu">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;