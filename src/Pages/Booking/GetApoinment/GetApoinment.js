import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./GetApoinment.css";

const GetApoinment = () => {
    return (
        <Container>
            <h2 className="my-5">Apoinment</h2>
            <Row>
                <Col>
                    <div className="booking text-center">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" required placeholder="Your Email" />
                        <button>Book</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GetApoinment;