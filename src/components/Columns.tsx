import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class ColumnEntry extends React.Component {
    static defaultProps = {
        title: "Placeholder",
        bg_col: "#ffffff",
        col: "#000000"
    }

    render() {
        return (
            <Card style={{ "background-color": this.props.bg_col, "color": this.props.col }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>

        )
    }
}

const Columns = () => {
    return (<div>
        <CardGroup style={{ "height": "200px" }}>
            <ColumnEntry title="Meet the Team" col="#d4e6f1" bg_col="#ae997a" />
            <ColumnEntry title="Methodology" col="#4c5b61" bg_col="#e0ccd8" />
            <ColumnEntry title="An Introductory Guide" col="#fbf7e4" bg_col="#90bbc4" />
        </CardGroup>
        <CardGroup style={{ "height": "200px" }}>
            <ColumnEntry col="#485c52" bg_col="#ced5de" />
            <ColumnEntry col="#4e426b" bg_col="#b7c1b8" />
            <ColumnEntry title="People" col="#f7f1e2" bg_col="#ce7984" />
        </CardGroup>
    </div>)
    //return (<CardGroup><Card>s</Card><Card>s</Card></CardGroup>)
};

export default Columns