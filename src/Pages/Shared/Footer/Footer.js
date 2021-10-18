import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo.png";

const Footer = () => {
    return (
        <div className="footer">
        <Container>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <div className="anout-us">
                        <img src={logo} alt="" />
                        <h4>ealth care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</h4>
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
                        <Link to="/home">Home</Link>
                        <Link to="/home">Service</Link>
                        <Link to="/home">Doctor</Link>
                        <Link to="/home">Blog</Link>
                        <Link to="/home">About</Link>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div className="opening-Hours">
                    <h3>Opening Hours</h3>
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                </Col>
            </Row>
        </Container>    
        </div>
    );
};

export default Footer;