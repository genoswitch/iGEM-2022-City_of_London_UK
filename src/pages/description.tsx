import * as React from "react"

import MarkdownPage from "../components/MarkdownPage"

import data from "../../pages/description.md"

const Page = () => {
    return (<MarkdownPage data={data} title="Description" />)
}

export default Page