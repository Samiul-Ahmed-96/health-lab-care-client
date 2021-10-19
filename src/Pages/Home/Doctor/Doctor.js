import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    const {name,designation,img} = props.doctor;
   
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="doctor-details">
                <img className="w-50" src={img} alt="service-img" />
                <h2>{name}</h2>
                <p>{designation}</p>
                <ul>
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-linkedin-in"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
        </Col>
    );
};

export default Doctor;