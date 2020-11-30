import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import InteractiveTree from '../components/InteractiveTree';

const progressStyle = {
    height: "40px",
    width: "100%",
    paddingTop: "2px",
    background: "transparent",
    fontWeight: "bolder",
    textSize: "80%",
}

function Home(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <InteractiveTree />
            <Carousel />
            <div>
                <Jumbotron className="bg-transparent">
                <h1 style={{padding: "20px 20px 20px 20px", textAlign: "center"}}>Languages</h1>
                <ProgressBar label={"Java"} variant="success" animated now={92} style={progressStyle} />
                <ProgressBar label={"C"} variant="danger" animated now={88} style={progressStyle} />
                <ProgressBar label={"Python"} variant="dark" animated now={87} style={progressStyle} />
                <ProgressBar label={"JavaScript"} variant="info" animated now={84} style={progressStyle} />
                <ProgressBar label={"Golang"} variant="secondary" animated now={80} style={progressStyle} />
                <ProgressBar label={"SQL"} variant="primary" animated now={85} style={progressStyle} />
                <ProgressBar label={"HTML / CSS"} variant="dark" animated now={90} style={progressStyle} />
                </Jumbotron>

                <Jumbotron className="bg-transparent">
                <h1 style={{padding: "20px 20px 20px 20px", textAlign: "center"}}>Frameworks</h1>
                <ProgressBar label={"React"} variant="danger" animated now={89} style={progressStyle} />
                <ProgressBar label={"Spring"} variant="dark" animated now={89} style={progressStyle} />
                <ProgressBar label={"Django"} variant="success" animated now={88} style={progressStyle} />
                <ProgressBar label={"GraphQL"} variant="dark" animated now={85} style={progressStyle} />
                <ProgressBar label={"Flask"} variant="danger" animated now={82} style={progressStyle} />
                <ProgressBar label={"Gin"} variant="info" animated now={80} style={progressStyle} />
                <ProgressBar label={"Node.js"} variant="secondary" animated now={79} style={progressStyle} />
                <ProgressBar label={"Express"} variant="primary" animated now={74} style={progressStyle} />
                </Jumbotron>

                <Jumbotron className="bg-transparent">
                <h1 style={{padding: "20px 20px 20px 20px", textAlign: "center"}}>Technologies</h1>
                <ProgressBar label={"Git"} variant="success" animated now={92} style={progressStyle} />
                <ProgressBar label={"OS X"} variant="info" animated now={91} style={progressStyle} />
                <ProgressBar label={"Trello"} variant="secondary" animated now={90} style={progressStyle} />
                <ProgressBar label={"Jira"} variant="dark" animated now={90} style={progressStyle} />
                <ProgressBar label={"Linux"} variant="danger" animated now={89} style={progressStyle} />
                <ProgressBar label={"Docker"} variant="secondary" animated now={88} style={progressStyle} />
                <ProgressBar label={"Bamboo CI"} variant="primary" animated now={88} style={progressStyle} />
                <ProgressBar label={"Windows"} variant="info" animated now={84} style={progressStyle} />
                </Jumbotron>
            </div>
        </div>
    );

}

export default Home;
