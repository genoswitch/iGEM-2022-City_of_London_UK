import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/hardware.md';

const Page = () => {
  return <MarkdownPage data={data} title="Hardware" />;
};

export default Page;
