import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ceo_image from "../../../Images/Our_concern/ceo.png";
import './OurConcern.css';

const OurConcern = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <section className='our-concern'>
            <Container className="ceo-container">
                <Row className="align-items-center">
                    <Col md={6} sm={12} xs={12}>
                        <div className="ceo-image">
                            <img data-aos="fade-left" className='w-100' src={Ceo_image} alt="" />
                        </div>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <div data-aos="fade-right" className="ceo-content">
                            <h1>Your <span>Health</span> is Our Concern</h1>
                            <h4>With occupancy rates at near capacity and an increasing number of complex patients,</h4>
                            <p>With occupancy rates at near capacity and an increasing number of complex patients, our existing facilities are being enhanced and new facilities created to meet .</p>
                            <img src="https://i.ibb.co/DRHjbrg/sign.png" alt="" />
                            <div className="ceo-name">
                            <h3>Roger Health</h3>
                            <span>CEO, Founder</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurConcern;