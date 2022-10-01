import * as React from "react"

import MarkdownPage from "../components/MarkdownPage"

import data from "../../pages/entrepreneurship.md"

import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    return (<MarkdownPage data={data} />)
}

export default Page