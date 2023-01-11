import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-jk">
                    <p className="footer-para">© TVS All Rights Reserved - 2022</p>
                </div>
            </footer>
        );
    }
}

export default Footer;