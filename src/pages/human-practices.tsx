import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/human-practices.md';

const Page = () => {
  return <MarkdownPage data={data} title="Human Practices" />;
};

export default Page;
