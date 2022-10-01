import * as React from "react";
import type { HeadFC } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';


import Columns from "../components/Columns";
import NavBar from "../components/NavBar";
import Credits from "../components/Credits";

import Footer from "../components/Footer";
import Montserrat from "../fonts/Montserrat";

const Index = () => {
    return (
        <div style={{ "height": "100vh" }}>
            <div>
                <NavBar />
                <Montserrat>
                    <Columns />
                </Montserrat>
                <div style={{ height: 50 }} />
                <Credits />
                <div style={{ height: 50 }} />
            </div>
            <Footer />
        </div >
    )
}
export default Index

export const Head: HeadFC = () => {
    return (
        <title>aLFA</title>
    )
}