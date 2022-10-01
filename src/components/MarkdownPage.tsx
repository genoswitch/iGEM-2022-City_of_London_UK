import * as React from "react";
import ReactMarkdown from 'react-markdown'

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Container from "react-bootstrap/Container"

import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

class MarkdownPage extends React.Component {
    static defaultProps = {
        data: "# Placeholder Page"
    }

    render() {
        return (<div>
            <div style={{ "paddingBottom": 100 }}>
                <NavBar />
                <Container>

                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={this.props.data} />
                </Container>
            </div>
            <Footer />
        </div >)
    }
}

export default MarkdownPage