import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./ServiceDetail.css";

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [serivces,setServices] = useState([]);
    const [singleService ,setSingleService] = useState({});

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    useEffect(()=>{
        const getService = serivces.find(service => service.id === serviceId);
        setSingleService(getService);
        console.log(getService);
    },[serivces])

    
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
                    <button className="service-btn">Get the Service</button>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default ServiceDetail;