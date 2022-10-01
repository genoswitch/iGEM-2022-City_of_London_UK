import * as React from "react";
import ReactMarkdown from 'react-markdown'

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Container from "react-bootstrap/Container"

import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MarkdownPage.css'


class MarkdownPage extends React.Component {
    static defaultProps = {
        data: "# Placeholder Page"
    }

    render() {
        return (
            <div>
                <NavBar />
                <div style={{ height: 20 }} />
                <Container>
                    <ReactMarkdown remarkPlugins={[remarkGfm, [remarkToc, { heading: 'contents' }]]} rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { class: "markdown-header-link" } }]]} children={this.props.data} />
                </Container>
                <Footer />
            </div >
        )
    }
}

export default MarkdownPage