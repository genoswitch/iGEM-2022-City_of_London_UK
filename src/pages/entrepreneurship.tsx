import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/entrepreneurship.md';

const Page = () => {
  return <MarkdownPage data={data} title="Entrepreneurship" />;
};

export default Page;
