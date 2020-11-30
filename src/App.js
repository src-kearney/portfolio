import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Sean Kearney',
      headerLinks: [
        { title: 'Home', path: '/portfolio' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Clean Code',
        subTitle: 'Welcome to my website.',
        text: 'Click the cards below to explore my side projects.',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Sean Kearney</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/portfolio" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
