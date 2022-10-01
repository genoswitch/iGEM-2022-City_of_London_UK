import * as React from "react"

import MarkdownPage from "../components/MarkdownPage"

import data from "../../pages/entrepreneurship.md"

const Page = () => {
    return (<MarkdownPage data={data} />)
}

export default Page