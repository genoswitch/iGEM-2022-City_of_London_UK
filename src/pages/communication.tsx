import * as React from 'react';
import { withPrefix } from 'gatsby';

import Redirect from '../components/Redirect';

const Page = () => {
  return <Redirect href={withPrefix('/human-practices')} />;
};

export default Page;
