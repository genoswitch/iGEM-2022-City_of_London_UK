import * as React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%"
}

const Footer = () => {
    return (
        <Navbar bg="light" style={footerStyle}>
            <Container>
                <Navbar.Text>
                    <Button variant="light" href="https://2022.igem.wiki/city-of-london-uk/">Source Code</Button>
                    <Button variant="light" href="#">Sponsors</Button>
                    <Button variant="light" href="#">Placeholder</Button>
                </Navbar.Text>
                <Navbar.Text>
                    © 2022 - Content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license.</a>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer