import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from "../../Images/LoginAndRegistration/signup.png";
import signupImg from "../../Images/LoginAndRegistration/signupiam.jpg";

const SignUp = () => {

    const {error,signInUsingGoogle,handleEmail,handlePassword,handleSignup,handleName} = useAuth();

    return (
        <Container>
        <h2 className="my-5">Please Sign Up</h2>
        <Row className="align-items-center">
            <Col md={6} sm={12}>
                <form onSubmit={handleSignup}>
                    <div className="form-item">
                        <img className="w-25" src={logo} alt="" />
                        <input onBlur={handleName} type="text" placeholder="Your Name" />
                        <input onBlur={handleEmail} type="email" placeholder="Email" />
                        <input onBlur={handlePassword} type="password" placeholder="Password" />
                        <h3>{error}</h3>
                        <input type="submit" value="Submit" />
                        <Link to="/login">
                            <button>Already SignUp?</button>
                        </Link>
                        <button onClick={signInUsingGoogle}><i class="fab fa-google"></i> Sign In Using Google</button>
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