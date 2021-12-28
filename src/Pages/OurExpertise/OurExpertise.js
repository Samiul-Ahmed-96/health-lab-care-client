import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ambu from '../../Images/Expertise/ambulance.png';
import doct from '../../Images/Expertise/doctor.png';
import emer from '../../Images/Expertise/emergency-call.png';
import expertImg from '../../Images/Expertise/expertise.jpg';
import tech from '../../Images/Expertise/project-management.png';

const OurExpertise = () => {
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
            'des' : 'Technology is the sum of any techniques, skills, methods, and processes used in the production of goods or services'

        },
        {
            'img' : ambu,
            'name' : 'ambulance',
            'des' : 'An ambulance is a medically equipped vehicle which transports patients to treatment facilities, such as hospitals.'

        }

    ]
    return (
        <section className='our-expertise'>
            <Container>
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <Row>
                             {
                                 expertise.map(expertiseItem => <Col md={6} sm={12} xs={12}>
                                        <div className="expertise-item">
                                            <img src={expertiseItem.img} alt="" />
                                            <h3>{expertiseItem.name}</h3>
                                            <p>{expertiseItem.des}</p>
                                        </div>
                                    </Col>)
                             }
                        </Row>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <div className="expertise-right">
                            <img src={expertImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurExpertise;