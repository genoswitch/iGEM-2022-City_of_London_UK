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
      'https://assets.reedpopcdn.com/-1617285526935.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1617285526935.jpg',
    children: <React.Fragment></React.Fragment>,
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
              <h1>{this.props.title}</h1>
            </div>
          </ParallaxBannerLayer>
          {this.props.children}
        </ParallaxBanner>
      </ParallaxProvider>
    );
  }
}

export default ParallaxHeader;
