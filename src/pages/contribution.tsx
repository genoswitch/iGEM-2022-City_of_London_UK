import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/contribution.md';

const Page = () => {
  return <MarkdownPage data={data} title="Contribution" />;
};

export default Page;
