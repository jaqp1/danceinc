import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';

function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  const onUpdateActiveLink = () => {
    setActiveLink(value);
  }
  
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
              onUpdateActiveLink('home')
            }}>Home</Nav.Link>
            <Nav.Link href="#stands" className={activeLink === 'stands' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
              onUpdateActiveLink('stands')
            }}>Stands</Nav.Link>
            <Nav.Link href="#realizacje" className={activeLink === 'realizacje' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
              onUpdateActiveLink('realizacje')
            }}>Realizacje</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt=""></img></a>
              <a href="#"><img src={navIcon2} alt=""></img></a>
              <a href="#"><img src={navIcon3} alt=""></img></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Skontaktuj się z nami!</span></button> 
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;