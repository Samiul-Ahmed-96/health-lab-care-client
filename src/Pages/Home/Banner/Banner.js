import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
                <Container>
                <Row className='align-items-center'>
                    <Col lg={6} md={6} sm={12} xm={12}>
                        <div className="banner-content">
                            <h4>Wellcome to <span>Health</span> Lab Care</h4>
                            <h1>
                            Your Health is Our Concern</h1>
                            <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                            <Link to='/service'>
                                <button>Appoinment Now</button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xm={12}>
                    <div className="banner-slider">
                            <Carousel fade>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/DKp0xfH/banner-1.png"
                                alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/VtR2552/banner-2.png"
                                alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/c1xcgGW/banner-3.png"
                                alt="Third slide"
                            />
                            </Carousel.Item>
                            </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;