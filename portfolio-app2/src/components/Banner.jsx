import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Contact from './Contact';

export default function Banner() {

    const toRotate = ["DJ", "Wodzirej", " DJ-skie duo"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() + 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },[delta])

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    function scrollToContact() {
        document.querySelector('#connect').scrollIntoView();
    }


  return (
    <section className="banner" id="home">
        <Container>
            <TrackVisibility offset={200}>
                {({ isVisible }) =>
                <Row className={isVisible ? "animate__animated animate__fadeIn align-items-center" : "animate__animated animate__fadeIn align-items-center"}>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to our portfolio</span>
                        <h1>{'Cześć, jesteśmy Dance Inc. '}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={() => scrollToContact()}>
                                Skontaktuj się z nami! 
                                
                            <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img  src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>}
            </TrackVisibility>
        </Container>
    </section>
  )
}

