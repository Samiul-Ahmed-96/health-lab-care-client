import Aos from 'aos';
import 'aos/dist/aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ambu from '../../../Images/Expertise/ambulance.png';
import doct from '../../../Images/Expertise/doctor.png';
import emer from '../../../Images/Expertise/emergency-call.png';
import expertImg from '../../../Images/Expertise/expertise.jpg';
import tech from '../../../Images/Expertise/project-management.png';
import './OurExpertise.css';

const OurExpertise = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    const expertise = [
        {   
            'img' : doct,
            'name' : 'certified doctors',
            'des' : 'Doctors are required to have a state medical license to practice medicine'

        },
        {
            'img' : emer,
            'name' : 'emergency',
            'des' : 'An emergency is a situation that poses an immediate risk to health, life.'

        },
        {
            'img' : tech, 
            'name' : 'technology',
            'des' : 'Technology is the sum of any techniques, skills, methods, and processes used in the production'

        },
        {
            'img' : ambu,
            'name' : 'ambulance',
            'des' : 'An ambulance is a medically equipped vehicle which transports patients to treatment'

        }

    ]
    return (
        <section className='our-expertise'>
            <Container>
            <div className="section-heading">
            <h2>Our <span>Expertise</span> </h2>
            <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
        </div>
                <Row className='align-items-center'>
                    <Col md={6} sm={12} xs={12}>
                        <Row>
                             {
                                 expertise.map(expertiseItem => <Col md={6} sm={12} xs={12}>
                                        <div data-aos="zoom-in" className="expertise-item">
                                            <img src={expertiseItem.img} alt="" />
                                            <h6>{expertiseItem.name}</h6>
                                            <p>{expertiseItem.des}</p>
                                        </div>
                                    </Col>)
                             }
                        </Row>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <div data-aos="fade-right" className="expertise-right">
                            <img className='w-100 my-3 p-4' src={expertImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurExpertise;