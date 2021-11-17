import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from "../../Images/LoginAndRegistration/signup.png";
import signupImg from "../../Images/LoginAndRegistration/signupiam.jpg";

const SignUp = () => {
     //From hooks
     const {setUser,setIsLoading,handleSignUp,getUserName,savedUser,handleSignOut} = useAuth();
     //States
     const [name , setName] =useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
     const [success,setSuccess] = useState('');
 
 
     
     const history= useHistory()
     const location = useLocation()
 
     const url= location.state?.from || "/login"
 
     //Handler
     const getNameValue=(e)=> {
         console.log(e.target.value);
     setName(e.target.value)
     }
 
     const getEmailValue=(e)=> {
         console.log(e.target.value);
     setEmail(e.target.value)
     }
 
     const getPasswordValue=(e)=> {
         console.log(e.target.value);
     setPassword(e.target.value)
     }

     const handleRegister=(e)=> {
        e.preventDefault();
        handleSignUp(email,password)
        .then((res) => {
          setIsLoading(true)
          getUserName(name)
            setUser(res.user)
            setSuccess('Registration Successfully')
            handleSignOut();
            savedUser(email,name,"POST")
            history.push(url)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
          .finally(()=> {
            setIsLoading(false)
          })
    }

    return (
        <Container>
        <h2 className="my-5">Please Sign Up</h2>
        <Row className="align-items-center">
            <Col md={6} sm={12}>
                <form onSubmit={handleRegister}>
                    <div className="form-item">
                        <img className="w-25" src={logo} alt="" />
                        <input onBlur={getNameValue} type="text" placeholder="Your Name" />
                        <input onBlur={getEmailValue} type="email" placeholder="Email" />
                        <input onBlur={getPasswordValue} type="password" placeholder="Password" />
                        <input type="submit" value="Submit" />
                        <Link to="/login">
                            <button>Already SignUp?</button>
                        </Link>
                        <h4>{success}</h4>
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