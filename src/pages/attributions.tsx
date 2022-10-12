import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/attributions.md';

const Page = () => {
  return <MarkdownPage data={data} title="Attributions" />;
};

export default Page;
