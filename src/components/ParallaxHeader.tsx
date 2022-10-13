import * as React from 'react';

import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';

class ParallaxHeader extends React.Component {
  static defaultProps = {
    aspectRatio: '2.5/1',
    title: 'Sample Page',
    bgSrc:
      'https://static.igem.wiki/teams/4508/wiki/site-res/banners/jian-hui-bg-dscf0101.jpg',
    children: <React.Fragment></React.Fragment>,
    textCol: 'black',
  };

  render() {
    return (
      <ParallaxProvider>
        <ParallaxBanner style={{ aspectRatio: this.props.aspectRatio }}>
          <ParallaxBannerLayer speed={-20} image={this.props.bgSrc} />
          <ParallaxBannerLayer>
            <div
              style={{
                color: 'white',
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                height: '100%',
              }}
            >
              <h1 style={{ color: this.props.textCol }}>{this.props.title}</h1>
            </div>
          </ParallaxBannerLayer>
          {this.props.children}
        </ParallaxBanner>
      </ParallaxProvider>
    );
  }
}

export default ParallaxHeader;
