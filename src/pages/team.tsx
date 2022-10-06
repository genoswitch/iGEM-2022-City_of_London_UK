import * as React from "react"

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import teamData from "../../pages/credits.json"

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


    state = {
        ready: false
    }

    componentDidMount(): void {

        teamData.people.forEach(person => {
            console.log(person)
            this.creditEntries.push(
                <CreditEntry person={person} />
            )
        })

        this.setState({ ready: true })


    }

    render() {
        return <div>
            <NavBar />
            <Container>
                {`Ready?: ${this.state.ready}`}
                <div>{this.creditEntries}</div></Container>
            <Footer />
        </div>
    }
}

export default TeamPage