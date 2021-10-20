import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import "./GetApoinment.css";

const GetApoinment = () => {
  //Modal State and handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Container>
            <h2 className="my-5">Apoinment</h2>
            <Row>
                <Col>
                    <div className="booking text-center">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" required placeholder="Your Email" />
                        <input type="text" required placeholder="Brief Description" />
                        <label for="department">Department </label>
                        <select className='my-3' name="Department" id="Department">
                        <option value="Department1">Department1</option>
                        <option value="Department1">Department2</option>
                        <option value="Department1">Department3</option>
                        <option value="Department1">Department4</option>
                        <option value="Department1">Department5</option>
                        <option value="Department1">Department6</option>
                        </select>
                        <label for="gender">Gender</label>
                        <select className='my-3' name="Gender" id="Gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                        <textarea name="Message" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
                        <button onClick={handleShow} className="mx-2 my-2">Book Apoinment <i class="far fa-plus-square"></i></button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Apoinment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Successfull</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GetApoinment;