import Aos from 'aos';
import 'aos/dist/aos';
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {id,name,description,img} = props.service;
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <Col md={4} sm={6} xs={12}>
            <div data-aos="zoom-in" className="service-details">
                <img src={img} alt="service-img" />
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to={`/booking/${id}`}>
                <button>Details {name}</button>
                </Link>
            </div>
        </Col>
    );
};

export default Service;