import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Images/LoginAndRegistration/login.png";
import loginImg from "../../Images/LoginAndRegistration/loginiam.jpg";
import "./Login.css";

const Login = () => {
    return (
        <Container>
            <h2 className="my-5">Please Login</h2>
            <Row className="align-items-center">
                <Col md={6} sm={12}>
                    <form>
                        <div className="form-item">
                            <img className="w-25" src={logo} alt="" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <Link to="/login">
                                <button><i class="far fa-arrow-alt-circle-right"></i> Login</button>
                            </Link>
                            <Link to="/login">
                                <button><i class="fab fa-google"></i> Sign In Using Google</button>
                            </Link>
                        </div>
                    </form>
                </Col>
                <Col md={6} sm={12}>
                    <img className="w-100 p-5" src={loginImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;