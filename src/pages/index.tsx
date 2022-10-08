import * as React from 'react';
import type { HeadFC } from 'gatsby';

import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from 'react-scroll-parallax';

import 'bootstrap/dist/css/bootstrap.min.css';

import Columns from '../components/Columns';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';
import Montserrat from '../fonts/Montserrat';

import '../fonts/Baskerville.css';

const ParallaxComponent = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner style={{ aspectRatio: '2/1' }}>
        <ParallaxBannerLayer
          speed={-20}
          image="https://static.igem.wiki/teams/4508/wiki/site-res/beans.png"
        />
        <ParallaxBannerLayer>
          <div
            style={{
              color: 'white',
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              height: 500,
            }}
          >
            <div>
              <div style={{ fontSize: 81, fontFamily: 'iGEM-Baskerville' }}>
                aLFA
              </div>
              <div
                style={{
                  marginTop: -40,
                  fontSize: 25,
                  fontFamily: 'iGEM-Montserrat',
                  fontWeight: 'lighter',
                  letterSpacing: 24,
                }}
              >
                remask
              </div>
            </div>
            <div>
              <img
                src="https://static.igem.wiki/teams/4508/wiki/site-res/alfa-logo-white.png"
                width={80}
                className="d-inline-block align-top"
              />
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

const Index = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#98a1c1' }}>
      <div>
        <NavBar />
        <ParallaxComponent />
        <Montserrat>
          <Columns />
        </Montserrat>
      </div>
      <Footer />
    </div>
  );
};
export default Index;

export const Head: HeadFC = () => {
  return <title>aLFA</title>;
};
