import * as React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const footerStyle = {
    width: "100%",
    fontFamily: "iGEM-Montserrat"
}

import "../fonts/Montserrat.css"

const Footer = () => {
    return (
        <Navbar bg="light" style={footerStyle}>
            <Container>
                <Navbar.Text>
                    <Button variant="light" href="https://gitlab.igem.org/2022/city-of-london-uk">Source Code</Button>
                    <Button variant="light" href="#">Sponsors</Button>
                    <Button variant="light" href="#">Placeholder</Button>
                    <p>© 2022 - Content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license.</a></p>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer