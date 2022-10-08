import * as React from "react"

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row';

import teamData from "../../pages/credits.json"


import 'bootstrap/dist/css/bootstrap.min.css';

class CreditEntry extends React.Component {
    static defaultProps = {
        person: {
            name: "iGEM Contributor",
            pic: "https://static.igem.org/websites/common/2022/logos/igem-logo-light.svg",
            desc: "Description goes here"
        }
    }

    render() {
        return (
            <div style={{ padding: 16 }}>
                <Card>
                    <Row>
                        <div class="col-md-4">
                            <Card.Img src={this.props.person.pic} />
                        </div>
                        <div class="col-md-8">
                            <Card.Body>
                                <Card.Title>{this.props.person.name}</Card.Title>
                                {this.props.person.desc}
                            </Card.Body>
                        </div>
                    </Row>
                </Card>
            </div>
        )
    }
}

class TeamPage extends React.Component {
    creditEntries = []
    totalImages: number = 0


    state = {
        ready: false,
        imagesLoaded: 0
    }

    componentDidMount(): void {
        let imagesLoaded = 0
        this.totalImages = teamData.people.length

        // Sort the people array by name
        teamData.people.sort((a, b) => a.name.localeCompare(b.name))

        teamData.people.forEach(person => {
            this.creditEntries.push(
                <CreditEntry person={person} />
            )

            // Preload the image
            const image = new Image();
            image.onload = () => {
                imagesLoaded++;
                console.log(`Loaded image ${imagesLoaded} of ${this.totalImages}`)
                this.setState({ imagesLoaded })
            }
            image.src = person.pic
        })

    }
    componentDidUpdate(): void {
        if (!this.state.ready && this.totalImages == this.state.imagesLoaded) {

            console.log("Images loaded, ready to render page!")
            this.setState({ ready: true })
        }

    }

    render() {
        if (!this.state.ready) {
            return <div>
                <NavBar />
                <Container>
                    <h1>Loading team members, please wait...</h1>
                </Container>
                <Footer />
            </div>
        }
        return <div>
            <NavBar />
            <ParallaxProvider>
                <ParallaxBanner style={{ aspectRatio: "2.5/1" }}>
                    <ParallaxBannerLayer speed={-20} image="https://static.igem.wiki/teams/4508/wiki/team/most-of-team-header-pic.jpg" />
                    <ParallaxBannerLayer>
                        <div style={{ color: "white", padding: 20, justifyContent: "center", alignItems: "center", display: "flex", height: 500 }}>
                            <h1>Meet the Team</h1>
                        </div>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </ParallaxProvider>
            <Container>
                {`Ready?: ${this.state.ready}`}
                <div>{this.creditEntries}</div></Container>
            <Footer />
        </div>
    }
}

export default TeamPage