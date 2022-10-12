import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/engineering.md';

const Page = () => {
  return <MarkdownPage data={data} title="Engineering" />;
};

export default Page;
