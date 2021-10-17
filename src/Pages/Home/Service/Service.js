import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name,description,img} = props.service;
   
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="service-details">
                <img src={img} alt="service-img" />
                <h2>{name}</h2>
                <p>{description}</p>
                <button>More Details</button>
            </div>
        </Col>
    );
};

export default Service;