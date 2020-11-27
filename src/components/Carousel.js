import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import photo1 from '../static/images/photo1.jpg';
import photo2 from '../static/images/photo2.jpg';
import photo3 from '../static/images/photo3.jpg';
import Card from '../components/Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'jobScrape',
                    subTitle: 'Scrape a job off the web. Implemented with HTMLUnit and Spring Boot.',
                    imgSrc: photo1,
                    link: 'https://github.com/src-kearney/jobScrape',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Sean Kearney',
                    subTitle: 'Software engineer with a passion for tackling challenging problems in creative ways.',
                    imgSrc: photo2,
                    link: 'https://linkedin.com/in/sean-kearney-9a40a9168/',
                    selected: false,
                },
                {
                    id: 2,
                    title: 'MusicPrescription',
                    subTitle: 'Ever wondered what critics think of your music taste? Implemented with Flask, Node.js, and React with help from the Spotify API.',
                    imgSrc: photo3,
                    link: 'https://musicprescription.herokuapp.com/',
                    selected: false,
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].select ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;