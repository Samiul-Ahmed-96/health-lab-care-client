import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className="header" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#doctor">Doctor</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#user">User</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;