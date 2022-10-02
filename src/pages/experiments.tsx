import * as React from "react"

import MarkdownPage from "../components/MarkdownPage"

import data from "../../pages/experiments.md"

const Page = () => {
    return (<MarkdownPage data={data} title="Experiments" />)
}

export default Page