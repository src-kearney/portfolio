import { useSpring, a } from 'react-spring';
import React, { memo, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import * as Icons from '../icons';
import { useMeasure, usePrevious } from '../helpers';
import { Frame, Title, Content, toggle } from '../styles';
import Logo from '../static/images/nasaWorm.png';

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <Title style={style}>{name}</Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </Content>
        </Frame>
    )
})

const rootStyle = {
    color: "black",
    fontWeight: 'bolder',
    fontSize: '300%',
};

const nodeStyle0 = {
    color: "black",
    fontWeight: 'bold',
}

const nodeStyle1 = {
    color: "black",
    fontWeight: 'light',
};

const imageStyle = {
    maxWidth: '30%',
    maxHeight: '30%',
    padding: '0px 0px 10px 0px',
}

function InteractiveTree(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-around py-5">     
                <Tree name="Experience" style={rootStyle} defaultOpen >
                    <Tree name="Software Engineering Intern, NASA" style={nodeStyle0} >

                    <Tree name="" style={nodeStyle1} defaultOpen >
                        <img src={Logo} alt="NASA Logo" style={imageStyle}/>
                    </Tree>

                        <Tree name="Worked with the System-Wide Safety team, operating to mitigate risks in the National Airspace." style={nodeStyle1} />
                        <Tree name="Implemented code coverage feature in Bamboo CI, using shell and Python scripts to query PostgreSQL database and determine whether to pass or fail each build." style={nodeStyle1} />
                        <Tree name="Correlated preexisting database entities with incoming entities in Spring API to give users access to historical object data." style={nodeStyle1} />
                        <Tree name="Refactored the API to provide a way to identify the conflicting object in specific error responses." style={nodeStyle1} />
                        <Tree name="Engaged in Agile development cycle, gave exit presentation to Diagnostics and Prognostics Group." style={nodeStyle1} />
                    </Tree>
                    <Tree name="Web Application Developer, Western Washington University" style={nodeStyle0}>
                        <Tree name="Learning design principles through the building and maintaining of web applications, demonstrated through working with Golang, React, Django, Wagtail, and MySQL." style={nodeStyle1} />
                        <Tree name="Utilizing Trello for Kanban style task management with Git and BitBucket for version control." style={nodeStyle1} />
                        <Tree name="Using Docker to containerize applications, writing scripts to improve workflow efficiency." style={nodeStyle1} />
                        <Tree name="Used TDD to build a matching algorithm mapped to a GET endpoint in Golang backend." style={nodeStyle1} />
                        <Tree name="Integrated a CMS and API using Django and Wagtail, displaying with React on our frontend." style={nodeStyle1} />
                    </Tree>
                    <Tree name="Computer Science Mentor, Western Washington University" style={nodeStyle0}>
                        <Tree name="Reinforced a firm understanding of data structures, computer systems, and other computer science fundamentals through tutoring my peers during drop-in mentor hours." style={nodeStyle1} />
                        <Tree name="Lead a workshop covering REST API principles, HTTP requests, CRUD operations, decoupling." style={nodeStyle1} />
                    </Tree>
                    <Tree name="Computer Assistant II, ATUS" style={nodeStyle0}>
                        <Tree name="Streamlined client support by utilizing resources to adapt and troubleshoot challenging, hands on IT tasks." style={nodeStyle1}/>
                    </Tree>

                </Tree>
            </Row>
        </Container>
    );

}

export default InteractiveTree;