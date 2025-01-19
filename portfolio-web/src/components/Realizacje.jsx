import React from 'react';
import stand1 from '../assets/stand1.jpg';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Card from './Card.jsx';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Realizacje() {

    const projects = [
        {
          title: "Poprawiny Lublin",
          description: "24.06.2023",
          imgUrl: stand1,
        },
        {
            title: "Poprawiny Lublin",
            description: "24.06.2023",
          imgUrl: stand1,
        },
        {
            title: "Poprawiny Lublin",
            description: "24.06.2023",
          imgUrl: stand1,
        },
        {
            title: "Poprawiny Lublin",
            description: "24.06.2023",
          imgUrl: stand1,
        },
        {
            title: "Poprawiny Lublin",
            description: "24.06.2023",
          imgUrl: stand1,
        },
        {
            title: "Poprawiny Lublin",
            description: "24.06.2023",
          imgUrl: stand1,
        },
      ];

  return (
    
   
    <section className="realizacja" id="realizacja">
    
        <Container  >
        <TrackVisibility offset={700}>
        {({ isVisible }) =>
            <Row className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                <Col>
                    <h2>Realizacje</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
               
                    <Tab.Container id="realizations-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Wesela</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Poprawiny</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Półmetki</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return <Card key={index} {...project} />
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Cosik</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Coś</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>}
             </TrackVisibility>
        </Container>
       
    </section>
  )
}
