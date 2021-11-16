import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import "./OurSystem.css";

const OurSystem = () => {
    const [system,setSystem] = useState([])
    useEffect(()=>{
        fetch('/system.json')
        .then(res => res.json())
        .then(data => setSystem(data))
    },[])
    return (
        <Row className="g-0">
            {
                system.map(singleItem => <Col md={4} sm={4} xm={4}>
                    <div className="system-item">
                        <i class={singleItem.icon}></i>
                        <h3>{singleItem.name}</h3>
                        <h5>{singleItem.description}</h5>
                    </div>
                    </Col>)
            }
        </Row>
    );
};

export default OurSystem;