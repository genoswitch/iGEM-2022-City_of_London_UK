import * as React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import "../fonts/Baskerville.css"


const NavBar = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/" style={{ "font-family": "iGEM-Baskerville" }}>
                    <img
                        src="https://static.igem.org/websites/common/2022/logos/igem-logo-light.svg"
                        width={30}
                        height={30}
                        className="d-inline-block align-top" />{' '}
                    aLFA
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="light" href="https://2022.igem.wiki/city-of-london-uk/">Source Code</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar