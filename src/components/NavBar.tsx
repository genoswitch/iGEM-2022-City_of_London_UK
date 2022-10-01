import * as React from "react";
import { withPrefix } from "gatsby"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "../fonts/Baskerville.css"


const NavBar = () => {
    return (
        <Navbar style={{ backgroundColor: "#98a1c1" }} variant="dark" >
            <Container>
                <Navbar.Brand href={withPrefix("")} style={{ "font-family": "iGEM-Baskerville" }}>
                    <img
                        src="https://static.igem.wiki/teams/4508/wiki/site-res/alfa-logo.png"
                        width={30}
                        height={30}
                        className="d-inline-block align-top" />{' '}
                    aLFA
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Project">
                            <NavDropdown.Item href={withPrefix("experiments")}>Experiments</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Awards">
                            <NavDropdown.Item href={withPrefix("entrepreneurship")}>Entrepreneurship</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link href={withPrefix("description")}>
                                Description <sup>(where does this go?)</sup>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar