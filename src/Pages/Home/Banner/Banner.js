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
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerTwo}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerThree}
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;