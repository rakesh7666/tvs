import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="assets/images/logo-tvs.png" className="mb-3" />
                            <p className="footer-desc">
                                RANGARAYA AUTOMOTIVES TVS is one of the fastest growing Authorised Dealer for TVS 2 Wheelers. Endowed with a state-of-the-art dealership and highly skilled Marketing and Service Staff, we have devoted ourselves to helping and serving our customers to the best of our ability.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mb-4 mt-3">Quick Links</h4>
                            <ul className="footer-links">
                                <li>
                                    <Nav.Link href="/about">About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/service">Service</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/products">Products</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mb-4 mt-3">Products</h4>
                            <ul className="footer-links">
                                <li>
                                    <Nav.Link href="/about">About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/service">Service</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/products">Products</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-white mt-4">Book Online</button>
                        </div>
                    </div>
                </div>
                <div className="footer-jk">
                    <p className="footer-para">© TVS All Rights Reserved - 2022</p>
                </div>
            </footer>
        );
    }
}

export default Footer;