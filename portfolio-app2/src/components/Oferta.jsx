import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from 'react-bootstrap';
import stand1 from '../assets/stand1.jpg';
import stand2 from '../assets/stand2.jpg';
import stand3 from '../assets/stand3.jpg';
import stand4 from '../assets/stand4.jpg';

export default function Oferta() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="oferta" id="oferta">
        <Container>
            <Row>
                <Col>
                    <div className="oferta-bx">
                        <h2>Oferta</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Carousel responsive={responsive} infinite={true} className="oferta-slider">
                            <div className="item">
                                <img src={stand1} alt="Image"></img>
                            </div>
                            <div className="item">
                                <img src={stand2} alt="Image"></img>
                            </div>
                            <div className="item">
                                <img src={stand3} alt="Image"></img>
                            </div>
                            <div className="item">
                                <img src={stand4} alt="Image"></img>
                            </div>

                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
