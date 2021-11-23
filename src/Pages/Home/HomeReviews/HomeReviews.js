import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
     <div>
        <Slider {...settings}>
          {
            reviews.map(singleReview => <div className='reviews-details'>
                <h2>{singleReview.name}</h2>
                <p>{singleReview.message}</p>
              </div>)
          }
        </Slider>
      </div>
  );
};

export default HomeReviews;