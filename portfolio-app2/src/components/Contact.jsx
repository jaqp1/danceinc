import React from 'react'
import { useState } from 'react';
import contactImg from '../assets/contact-img.svg'
import {Container, Row, Col} from 'react-bootstrap';
import Swal from  'sweetalert2/dist/sweetalert2.js';

export default function Contact() {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [fomrDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Wyślij');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...fomrDetails,
            [category]: value
        })
    }

    const [result, setResult] = React.useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      setButtonText("Wysyłanie...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ccb4bca3-4aa0-4f61-9eb3-0bbff39910f6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      setButtonText("Wyślij");
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Dziękujemy!",
            text: "Wiadomość została wysłana",
            icon: "success",
            timer: 4000,
            background: "#151515",
            color: "#fff",
          })
        event.target.reset();
      } else {
        Swal.fire({
            title: 'Błąd',
            text: 'Coś poszło nie tak, spróbuj ponownie później',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        setResult(data.message);
      }
    };

  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col className="contact-img" md={6}>
                    <img src={contactImg} alt="Contact Us"></img>
                </Col>
                <Col md={6}>
                    <h2>Napisz do nas!</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={fomrDetails.firstName} placeholder="Imię" onChange={(e) => onFormUpdate('firstName', e.target.value)} name="name" required></input>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={fomrDetails.lastName} placeholder="Nazwisko" onChange={(e) => onFormUpdate('lastName', e.target.value)} name="lastName" required></input>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={fomrDetails.email} placeholder="Adres email" onChange={(e) => onFormUpdate('email', e.target.value)} name="email" required></input>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={fomrDetails.phone} placeholder="Numer telefonu" onChange={(e) => onFormUpdate('phone', e.target.value)} name="phone" required></input>
                            </Col>
                            <Col>
                                <textarea row="6" value={fomrDetails.message} placeholder="Wiadomość..." onChange={(e) => onFormUpdate('message',e.target.value)} name="message" required></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
