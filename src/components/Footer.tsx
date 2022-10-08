import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const footerStyle = {
  width: '100%',
  fontFamily: 'iGEM-Montserrat',
};

import '../fonts/Montserrat.css';

export const query = graphql`
  {
    gitCommit(latest: { eq: true }) {
      hash
    }
  }
`;

const Footer = () => {
  const queryData = useStaticQuery(query);
  const commit_sha = queryData.gitCommit.hash.substring(0, 8);
  return (
    <Navbar bg="light" style={footerStyle}>
      <Container>
        <Navbar.Text>
          <Button
            variant="light"
            href="https://gitlab.igem.org/2022/city-of-london-uk"
          >
            Source Code
          </Button>
          <Button variant="light" href="#">
            Sponsors
          </Button>
          <Button variant="light" href="#">
            Placeholder
          </Button>
          <Navbar.Text>(SHA: {commit_sha})</Navbar.Text>
          <p>
            © 2022 - Content on this site is licensed under a{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International license.
            </a>
          </p>
        </Navbar.Text>
        {/* TODO: Perhaps have this be underneath the rest of the footer when on mobile (lower width viewports) */}
        <img
          style={{ opacity: 0.55 }}
          width={250}
          src="https://static.igem.wiki/teams/4508/wiki/site-res/team-logo-1.svg"
        />
      </Container>
    </Navbar>
  );
};

export default Footer;
