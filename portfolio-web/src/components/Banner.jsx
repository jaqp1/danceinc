import React from 'react'
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.png";

export default function Banner() {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to our portfolio</span>
                    <h1>{'Cześć, jesteśmy Dance Inc. '}<span className="wrap"> DJ-skie duo na twoją imprezę!</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button onClick={() => console.log('connect')}>Skontaktuj się z nami! <ArrowRightCircle size={25}></ArrowRightCircle></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

