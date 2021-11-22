import Aos from 'aos';
import 'aos/dist/aos';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./OurSystem.css";

const OurSystem = () => {
    const [system,setSystem] = useState([])
    useEffect(()=>{
        
        fetch('/system.json')
        .then(res => res.json())
        .then(data => setSystem(data))
    },[])
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
       <Container className="system-container">
        <Row className="g-0 system-row" >
        {
            system.map(singleItem => <Col md={4} sm={4} xm={4}>
                <div data-aos="fade-up" className="system-item">
                    <i class={singleItem.icon}></i>
                    <h3>{singleItem.name}</h3>
                    <h5>{singleItem.description}</h5>
                </div>
                </Col>)
        }
        </Row>
       </Container>
    );
};

export default OurSystem;