import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Images/LoginAndRegistration/signup.png";
import signupImg from "../../Images/LoginAndRegistration/signupiam.jpg";

const SignUp = () => {
    return (
        <Container>
            <h2 className="my-5">Please Sign Up</h2>
            <Row className="align-items-center">
                <Col md={6} sm={12}>
                    <form>
                        <div className="form-item">
                            <img className="w-25" src={logo} alt="" />
                            <input type="text" required placeholder="Your Name" />
                            <input type="email" required placeholder="Email" />
                            <input type="password" required placeholder="Password" />
                            <Link to="/login">
                                <button><i class="far fa-arrow-alt-circle-right"></i> Sign Up</button>
                            </Link>
                            <Link to="/login">
                                <button>Already Sign in ?</button>
                            </Link>
                        </div>
                    </form>
                </Col>
                <Col md={6} sm={12}>
                    <img className="w-100 p-5" src={signupImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;