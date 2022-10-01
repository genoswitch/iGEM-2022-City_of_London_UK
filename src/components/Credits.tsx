import * as React from "react";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CreditEntry extends React.Component {
    static defaultProps = {
        name: "iGEM Contributor",
        img: "https://static.igem.org/websites/common/2022/logos/igem-logo-light.svg"
    }

    render() {
        return (<Col>
            <Card>
                <Card.Img src={this.props.img} height={50} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>)
    }
}


const Credits = () => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Credits</Card.Title>
                    <Container>
                        <Row>
                            <CreditEntry name="Luke Wallis" />
                            <CreditEntry name="Arthur Alliliare" />
                            <CreditEntry name="Rishabh Das" />
                        </Row></Container>
                </Card.Body>
            </Card>
        </Container>)
}

export default Credits