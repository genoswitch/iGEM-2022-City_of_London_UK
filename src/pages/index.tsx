import * as React from "react";
import type { HeadFC } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';


import Columns from "../components/Columns";
import NavBar from "../components/NavBar";
import Credits from "../components/Credits";

import Footer from "../components/Footer";

const Index = () => {
    return (<div style={{ "height": "100vh", "background-color": "#a49373" }}>
        <NavBar /><br />
        <Columns />
        <br /><br /><br /><br /><br />
        <Credits />
        <Footer />
    </div >)
}
export default Index

export const Head: HeadFC = () => {
    return (
        <title>aLFA</title>
    )
}