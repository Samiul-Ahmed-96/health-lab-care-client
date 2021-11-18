import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import "./ServiceDetail.css";

const ServiceDetail = () => {
    const {user} = useAuth();
    //Get the ID 
    const {id} = useParams();
    //State
    const [singleService,setSingleService] = useState({})
    //Data load
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])
    return (
        <Container> 
        <h2 className="my-5">Details About {singleService?.name}</h2>
        <Row className="align-items-center my-5">
            <Col md={6}>
                <div className="single-service-img text-center">
                    <img className="w-50" src={singleService?.img} alt="" />
                </div>
            </Col>
            <Col md={6}>
                <div className="single-service-details">
                    <h2>{singleService?.name}</h2>
                    <p>{singleService?.description}</p>
                    <small>{singleService?.rating}</small>
                    <h3>${singleService?.price}</h3>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default ServiceDetail;