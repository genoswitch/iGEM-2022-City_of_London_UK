import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MarkdownPage.css';

class MarkdownPage extends React.Component {
  static defaultProps = {
    data: '# Placeholder Page',
    title: 'Title',
  };

  render() {
    return (
      <div>
        <NavBar />
        <ParallaxProvider>
          <ParallaxBanner style={{ aspectRatio: '2.5/1' }}>
            <ParallaxBannerLayer
              speed={-20}
              image="https://assets.reedpopcdn.com/-1617285526935.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1617285526935.jpg"
            />
            <ParallaxBannerLayer>
              <div
                style={{
                  color: 'white',
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  height: 500,
                }}
              >
                <h1>{this.props.title}</h1>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </ParallaxProvider>
        <div style={{ height: 20 }} />
        <Container>
          <ReactMarkdown
            remarkPlugins={[
              remarkGfm,
              [remarkToc, { heading: 'contents', maxDepth: 1 }],
            ]}
            rehypePlugins={[
              rehypeRaw,
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: 'wrap',
                  properties: { class: 'markdown-header-link' },
                },
              ],
            ]}
            children={this.props.data}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MarkdownPage;
