
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import logo from "../../Images/LoginAndRegistration/login.png";
import loginImg from "../../Images/LoginAndRegistration/loginiam.jpg";
import "./Login.css";

const Login = () => {
    const {signInUsingGoogle,setUser ,loginViaEmailAndPassword, setIsLoading,savedUser,handleResetPassword} = useAuth();
    const history= useHistory()
    const location = useLocation()

    const url= location.state?.from || "/home" ;

    const [email , setEmail]= useState("")
    const [password , setPassword] = useState("")
    const [success,setSuccess] = useState('');


    const handleGetEmail = (e) =>{
    setEmail(e.target.value);
    }

    const handleGetPassword = (e)=> {
        setPassword(e.target.value);
    }
   
    const handleLoginWithEmailAndPassword=(e)=>{
        e.preventDefault();
        loginViaEmailAndPassword(email,password)
        .then((res) => {
          setIsLoading(true)
            setUser(res.user);
            alert('Login Successfully');
            setSuccess('Login Successfully');
            history.push(url)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
          .finally(() => {
            setIsLoading(false)
          })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              savedUser(res.user.email,res.user.displayName,"PUT")
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };
    return (
        <Container>
            <h2 className="my-5">Please Login</h2>
            <Row className="align-items-center">
                <Col md={6} sm={12}>
                    <form onSubmit={handleLoginWithEmailAndPassword}>
                        <div className="form-item">
                            <img className="w-25" src={logo} alt="" />
                            <input onBlur={handleGetEmail} type="email" placeholder="Email" />
                            <input onBlur={handleGetPassword} type="password" placeholder="Password" />
                            <input type="submit" value="Login" />
                            <button onClick={handleGoogleLogin}><i class="fab fa-google"></i> Sign In Using Google</button>
                            <button onClick={handleResetPassword}>Forget Password</button>
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