import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';

function About(props) {

    return(
        <Container>
            <Hero title={props.title}>
            </Hero>
            <Content>
                I am a senior at Western Washington University graduating in March 2021. 
                During my education, it has been my goal to build a diverse skillset to establish myself as an agile software engineer.
                My experience varies from creating an author guesser in a Natural Language Processing course to implementing features within a Spring API at NASA.
                I’m looking to work on a passionate engineering team that loves to tackle challenging problems head on. I’d like to be in an atmosphere in which building skills is a priority and learning is encouraged. As someone who is enthusiastic for anything and everything software engineering, I would love to be on a team where that enthusiasm is matched.
            </Content>
        </Container>
    );
    
}

export default About;