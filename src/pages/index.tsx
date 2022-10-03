import * as React from "react";
import type { HeadFC } from "gatsby"

import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";

import 'bootstrap/dist/css/bootstrap.min.css';


import Columns from "../components/Columns";
import NavBar from "../components/NavBar";
import Credits from "../components/Credits";

import Footer from "../components/Footer";
import Montserrat from "../fonts/Montserrat";


import "../fonts/Baskerville.css"

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: "2.5/1" }}>
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/beans.png"
                />
                <ParallaxBannerLayer>
                    <div style={{ color: "white", padding: 20, justifyContent: "center", alignItems: "center", display: "flex", height: 500 }}>
                        <span style={{ fontSize: 81, fontFamily: "iGEM-Baskerville" }}>aLFA</span>
                        <div style={{ paddingLeft: 20 }}>
                            <img
                                src="https://static.igem.wiki/teams/4508/wiki/site-res/alfa-logo.png"
                                width={80}
                                className="d-inline-block align-top" />
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

const Index = () => {
    return (
        <div style={{ "height": "100vh", backgroundColor: "#98a1c1" }}>
            <div>
                <NavBar />
                <ParallaxComponent />
                <Montserrat>
                    <Columns />
                </Montserrat>
                <div style={{ height: 50 }} />
                <Credits />
                <div style={{ height: 50 }} />
            </div >
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