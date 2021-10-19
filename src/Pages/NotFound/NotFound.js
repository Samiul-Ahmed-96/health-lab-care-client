import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
            <div className="notFound">
            <h1>Page not Found</h1>
            <h1>404</h1>
            </div>
        </Container>
    );
};

export default NotFound;