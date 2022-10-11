import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/hardware.md';

const Page = () => {
  return (
    <MarkdownPage
      data={data}
      title="Hardware"
      titleTextCol="black"
      parallaxBgSrc="https://static.igem.wiki/teams/4508/wiki/hardware/mask-model-1.png"
    />
  );
};

export default Page;
