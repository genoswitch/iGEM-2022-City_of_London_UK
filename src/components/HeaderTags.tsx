import * as React from 'react';
import { Helmet } from 'react-helmet';

class HeaderTags extends React.Component {
  static defaultProps = {
    title: 'aLFA REMASK',
  };

  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
      </Helmet>
    );
  }
}

export default HeaderTags;
