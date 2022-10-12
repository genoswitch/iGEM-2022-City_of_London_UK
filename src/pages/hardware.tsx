import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/hardware.md';

const Page = () => {
  return (
    <MarkdownPage
      data={data}
      title="Hardware"
      titleTextCol="black"
      parallaxBgSrc="https://static.igem.wiki/teams/4508/wiki/site-res/hardware-dual-header.jpeg"
    />
  );
};

export default Page;
