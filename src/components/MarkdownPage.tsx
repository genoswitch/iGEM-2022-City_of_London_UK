import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Footer from '../components/Footer';
import HeaderTags from '../components/HeaderTags';
import NavBar from '../components/NavBar';

import ParallaxHeader from '../components/ParallaxHeader';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MarkdownPage.css';

import './tables.css';

class MarkdownPage extends React.Component {
  static defaultProps = {
    data: '# Placeholder Page',
    title: 'Title',
    parallaxBgSrc: undefined,
    titleTextCol: undefined,
  };

  render() {
    return (
      <div>
        <HeaderTags title={`aLFA | ${this.props.title}`} />
        <NavBar />
        <ParallaxHeader
          title={this.props.title}
          bgSrc={this.props.parallaxBgSrc}
          textCol={this.props.titleTextCol}
        />
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
