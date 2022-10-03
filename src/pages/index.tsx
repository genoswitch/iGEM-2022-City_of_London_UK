import * as React from "react";
import type { HeadFC } from "gatsby"

import {
    ParallaxBanner,
    ParallaxBannerLayer,
    ParallaxProvider,
    Parallax
} from "react-scroll-parallax";

import 'bootstrap/dist/css/bootstrap.min.css';


import Columns from "../components/Columns";
import NavBar from "../components/NavBar";
import Credits from "../components/Credits";

import Footer from "../components/Footer";
import Montserrat from "../fonts/Montserrat";


import "../fonts/Baskerville.css"

const addBlur = (i: any) => {
    return {
        "filter": `blur(${i}px)`,
        "-webkit-filter": `blur(${i}px)`
    }
}

const ParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean1.png"
                    style={addBlur(8)}
                />
                <ParallaxBannerLayer
                    speed={-25}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean2.png"
                    style={addBlur(1)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean3.png"
                    style={addBlur(1)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean4.png"
                    style={addBlur(1)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean5.png"
                    style={addBlur(3)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean6.png"
                    style={addBlur(5)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean7.png"
                    style={addBlur(2)}
                />
                <ParallaxBannerLayer
                    speed={-20}
                    image="https://static.igem.wiki/teams/4508/wiki/site-res/bean-states/bean8.png"
                    style={addBlur(2)}
                />
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