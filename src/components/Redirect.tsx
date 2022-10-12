import * as React from 'react';

class Redirect extends React.Component {
  static defaultProps = {
    href: '',
  };

  render() {
    return (
      <div>
        <meta http-equiv="refresh" content={`0; url=${this.props.href}`} />
        <h1>
          Redirecting to <a href={this.props.href}>{this.props.href}</a>
        </h1>
        <a href={this.props.href}>Click here if you are not redirected.</a>
      </div>
    );
  }
}

export default Redirect;
