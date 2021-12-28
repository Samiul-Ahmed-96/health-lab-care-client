import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomeReviews.css";

const HomeReviews = () => {
  const [reviews,setReviews] = useState([]);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(()=>{
    fetch('https://stormy-basin-00847.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <div className="home-reviews">
    <Container className="my-5">
    <div className="section-heading">
    <h2>See Our  Customers<span> Reviews</span> </h2>
    <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
    </div>
    <div>
    <Slider {...settings}>
      {
        reviews.map(singleReview => <div className='reviews-details'>
            <h3>{singleReview.name}</h3>
            <p><span>"</span> {singleReview.massage} <span>"</span> </p>
            <Rating 
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={singleReview.rating} readonly>
            </Rating>
          </div>)
      }
    </Slider>
  </div>
    </Container>
    </div>
  );
};

export default HomeReviews;