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
            <Navbar sticky="top" className="header"  collapseOnSelect expand="lg" >
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
                    {user.email && <Link to="/dashboard">Dashboard</Link>}
                </Nav>
                <Nav>
                    <li>{user?.displayName}</li>
                    {user.email ? 
                    <button onClick={handleSignOut}>Sign out <i class="fas fa-sign-out-alt"></i></button>   
                    : <Link className='ls-btn' to="/login">Login</Link>}
                    <Link className='ls-btn' to="/signup">Sign Up</Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;