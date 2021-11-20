import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "../../../Images/logo.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
        <Container>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <div className="anout-us">
                        <img src={logo} alt="" />
                        <h4>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</h4>
                        <ul>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="departments">
                    <h3>Departments</h3>
                        <ul>
                            <li><a href="#">Surgery and Radiology</a></li>
                            <li><a href="#">Departments</a></li>
                            <li><a href="#">Family</a></li>
                            <li><a href="#">Our Doctors</a></li>
                            <li><a href="#">Woman's Health</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="links">
                        <h3>Links</h3>
                        <ul>
                          <li><Link to="/home">Home</Link></li>
                          <li><Link to="/service">Services</Link></li>
                          <li><HashLink to="/home#doctors">Doctor</HashLink></li>
                          <li><Link to="/dashboard">Dashboard</Link></li>
                          <li><HashLink to="/home#about">About</HashLink></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="opening-Hours">
                    <h3>Opening Hours</h3>
                    <ul>
                      <li>MON - TUES ---- <span>9.00AM - 17.00PM</span></li>
                      <li>WEDNESDAY ----<span>9.00AM - 17.00PM</span></li>
                      <li>THURSDAY ---- <span>9.00AM - 17.00PM</span></li>
                      <li>FRIDAY ---- <span>9.00AM - 17.00PM</span></li>
                      <li>SATURDAY ---- <span>CLOSED</span></li>
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>    
        </div>
    );
};

export default Footer;