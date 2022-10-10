import * as React from 'react';
import { withPrefix } from 'gatsby';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../fonts/Baskerville.css';

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#98a1c1' }} variant="dark">
      <Container>
        <Navbar.Brand
          href={withPrefix('')}
          style={{ 'font-family': 'iGEM-Baskerville' }}
        >
          aLFA{' '}
          <img
            src="https://static.igem.wiki/teams/4508/wiki/site-res/alfa-logo-white.png"
            width={30}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Project">
              <NavDropdown.Item href={withPrefix('contribution')}>
                Contribution
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('description')}>
                Description
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('experiments')}>
                Experiments
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('hardware')}>
                Hardware
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('model')}>
                Modelling
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Human Practices">
              <NavDropdown.Item href={withPrefix('human-practices')}>
                Human Practices
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('entrepreneurship')}>
                Entrepreneurship
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix('partnership')}>
                Partnership
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href={withPrefix('team')}>Team</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
