import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerOne from '../../../Images/Banner/banner (1).jpg';
import bannerTwo from '../../../Images/Banner/banner (2).jpg';
import bannerThree from '../../../Images/Banner/banner (3).jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="carousel-description">
                    <h3>Quality Helthcare Starts With Quality Doctors</h3>
                    <p>“Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity”</p>
                    <button>Get a doctor</button>
                    <button>Contact now</button>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerTwo}
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <div className="carousel-description">
                    <h3>Quality Helthcare Starts With Quality Doctors</h3>
                    <p>“Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity”</p>
                    <button>Get a doctor</button>
                    <button>Contact now</button>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerThree}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <div className="carousel-description">
                    <h3>Quality Helthcare Starts With Quality Doctors</h3>
                    <p>“Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity”</p>
                    <button>Get a doctor</button>
                    <button>Contact now</button>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;