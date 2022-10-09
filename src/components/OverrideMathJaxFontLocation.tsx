import * as React from 'react';
import { Helmet } from 'react-helmet';

const OverrideMathJaxFontLocation = () => {
  return (
    <Helmet>
      <script
        type="text/javascript"
        src="../mathjax-change-fonturl.js"
      ></script>
    </Helmet>
  );
};

export default OverrideMathJaxFontLocation;
