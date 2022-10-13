import * as React from 'react';

import MarkdownPage from '../components/MarkdownPage';

import data from '../../pages/entrepreneurship.md';

const Page = () => {
  return (
    <MarkdownPage
      data={data}
      title="Entrepreneurship"
      titleTextCol="white"
      parallaxBgSrc="https://static.igem.wiki/teams/4508/wiki/site-res/banners/entrepreneurship-banner.jpg"
    />
  );
};

export default Page;
