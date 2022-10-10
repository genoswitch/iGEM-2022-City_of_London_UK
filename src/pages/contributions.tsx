import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/contributions.md';

const Page = () => {
  return <MarkdownPage data={data} title="Contributions" />;
};

export default Page;
