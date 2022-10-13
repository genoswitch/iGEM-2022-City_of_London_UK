import * as React from 'react';
import { Helmet } from 'react-helmet';

import { withPrefix } from 'gatsby';

class HeaderTags extends React.Component {
  static defaultProps = {
    title: 'aLFA REMASK',
  };

  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://static.igem.wiki/teams/4508/wiki/site-res/icons/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://static.igem.wiki/teams/4508/wiki/site-res/icons/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://static.igem.wiki/teams/4508/wiki/site-res/icons/favicon-16x16.png"
        ></link>
        <link rel="manifest" href={withPrefix('site.webmanifest')}></link>
      </Helmet>
    );
  }
}

export default HeaderTags;
