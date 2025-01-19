import React from 'react'
import Collapse from 'react-bootstrap/esm/Collapse'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo.png';
import navIcon1 from '../assets/tiktok_white.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="Logo"></img>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.tiktok.com/@dance_inc.dj?_t=ZN-8tCxmwz5kMY&_r=1"><img src={navIcon1}></img></a>
                        <a href="https://www.facebook.com/dance.incdj"><img src={navIcon2}></img></a>
                        <a href="https://www.instagram.com/dance_inc.dj/"><img src={navIcon3}></img></a>
                    </div>
                    <p> © Copyright {currentYear} Dance Inc. Wszelkie prawa zastrzeżone.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
