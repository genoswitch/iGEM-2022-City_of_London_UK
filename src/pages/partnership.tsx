import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/partnership.md';

const Page = () => {
  return <MarkdownPage data={data} title="Partnership" />;
};

export default Page;
