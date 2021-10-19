import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {id,name,description,img} = props.service;
   
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="service-details">
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

export default SingleService;