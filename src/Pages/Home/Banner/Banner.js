import Aos from 'aos';
import 'aos/dist/aos';
import React, { useEffect } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerOne from '../../../Images/Banner/banner (1) (1).png';
import BannerTwo from '../../../Images/Banner/banner (2) (1).png';
import BannerThree from '../../../Images/Banner/banner (3) (1).png';
import './Banner.css';

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div className="banner">
                <Container>
                <Row className='align-items-center banner-row'>
                    <Col lg={6} md={6} sm={12} xm={12}>
                        <div data-aos="fade-left" className="banner-content">
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
                                className="d-block"
                                src={BannerOne}
                                alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block"
                                src={BannerTwo}
                                alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block"
                                src={BannerThree}
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