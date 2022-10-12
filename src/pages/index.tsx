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
import HeaderTags from '../components/HeaderTags';

import Footer from '../components/Footer';
import Montserrat from '../fonts/Montserrat';

import '../fonts/Baskerville.css';

const ParallaxComponent = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        style={{ aspectRatio: '2/1', backgroundColor: '#98a1c1' }}
      >
        <ParallaxBannerLayer
          speed={0}
          image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean3x04.png"
        />
        <ParallaxBannerLayer
          speed={10}
          image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean3x03.png"
        />
        <ParallaxBannerLayer
          speed={20}
          image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean3x02.png"
        />
        <ParallaxBannerLayer
          speed={30}
          image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean3x01.png"
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
              <div
                style={{
                  fontSize: 81,
                  fontFamily: 'iGEM-Baskerville',
                  marginTop: 40,
                }}
              >
                aLFA
              </div>
              <div
                style={{
                  marginTop: -30,
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
                style={{ marginTop: 40 }}
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
      <HeaderTags title={`aLFA | Home`} />
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

// Now done with HeaderTags instead.
//export const Head: HeadFC = () => {
//  return <title>aLFA</title>;
//};
