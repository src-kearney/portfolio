import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const linkStyle = {
    fontWeight:"bold",
    fontSize: "150%",
}

function Contact(props) {

    return(
        <Container>
            <Hero title={props.title}>
            </Hero>
            <Content>

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        GitHub
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        LinkedIn
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                        Email
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                        Phone
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content style={{textAlign: "center"}}>
                        <Tab.Pane eventKey="#link1">
                        <a href="https://github.com/src-kearney" style={linkStyle}>https://github.com/src-kearney</a><br/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <a href="https://www.linkedin.com/in/sean-kearney-9a40a9168/" style={linkStyle}>https://www.linkedin.com/in/sean-kearney-9a40a9168</a><br/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                        <a href="mailto:src.kearney@gmail.com" style={linkStyle}>src.kearney@gmail.com</a><br/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                        <a href="tel:206-714-3703" style={linkStyle}>206-714-3703</a><br/>
                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Content>
        </Container>
    );
    
}

export default Contact;