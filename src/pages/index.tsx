import * as React from "react";
import type { HeadFC } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';


import Columns from "../components/Columns";
import NavBar from "../components/NavBar";
import Credits from "../components/Credits";

import Footer from "../components/Footer";

import "../fonts/MontserratGlobal.css"

const Index = () => {
    return (<div style={{ "height": "100vh" }}>
        <div style={{ "paddingBottom": 100 }}>
            <NavBar /><br />
            <Columns />
            <br /><br /><br /><br /><br />
            <Credits /></div>
        <Footer />
    </div >)
}
export default Index

export const Head: HeadFC = () => {
    return (
        <title>aLFA</title>
    )
}