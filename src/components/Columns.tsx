import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';

const Columns = () => {
    return (<Container>
        <Row>
            <Col>
                <Card style={{ "background-color": "#a3aac7" }}>
                    <Card.Body>
                        <Card.Title>Meet the Team</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ "background-color": "#e0ccd8" }}>
                    <Card.Body>
                        <Card.Title>Methodology</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ "background-color": "#8bbcc6" }}>
                    <Card.Body>
                        <Card.Title>Introductory Guide</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container >)
};

export default Columns