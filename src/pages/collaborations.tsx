import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/collaborations.md';

const Page = () => {
  return <MarkdownPage data={data} title="Collaborations" />;
};

export default Page;
