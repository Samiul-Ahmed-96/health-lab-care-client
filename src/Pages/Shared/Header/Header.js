import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {
    //destructuring value
    const {user,handleSignOut} = useAuth();
    return (
        <div>
            <Navbar className="header" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    <HashLink to="/home#about">About</HashLink>
                    <HashLink to="/home#service">Special</HashLink>
                    <HashLink to="/home#doctors">Doctor</HashLink>
                    <Link to="/service">Services</Link>
                    <Link to="/apoinment">Apoinment</Link>
                </Nav>
                <Nav>
                    <li>{user?.displayName}</li>
                    {user.email ? 
                    <button onClick={handleSignOut}>Logout</button>   
                    : <Link to="/login">Login</Link>}
                    <Link to="/signup">Sign Up</Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;