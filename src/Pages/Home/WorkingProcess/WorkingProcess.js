import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WorkingProcess.css';

const WorkingProcess = () => {
    const [workingProcess,setWorkingProcess] = useState([])
    useEffect(()=>{
        fetch('/workingProcess.json')
        .then(res => res.json())
        .then(data =>setWorkingProcess(data))
    },[])
    return (
        <section className='working-process-container'>
        <Container >
        <div className="section-heading">
        <h2>Our Working <span>Process</span> </h2>
        <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
         </div>
            <Row>
                {
                    workingProcess.map(singleProcess => <Col md={3} sm={12} xs={12}>
                        <div className="working-system">
                        <img src={singleProcess.img} alt="" />
                        <h3>{singleProcess.name}</h3>
                        <h5>{singleProcess.description}</h5>
                        </div>
                        </Col>)
                }
            </Row>
        </Container>
        </section>
       
    );
};

export default WorkingProcess;