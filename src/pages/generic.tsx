import * as React from "react";
import ReactMarkdown from 'react-markdown'

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Container from "react-bootstrap/Container"

import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import data from "../../pages/entrepreneurship.md"

const Page = () => {
    return (<div>
        <div style={{ "paddingBottom": 100 }}>
            <NavBar />
            <Container>

                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={data} />
            </Container>
        </div>
        <Footer />
    </div >)
}

export default Page