import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
       <Container id="service" className='text-center'>
            <h2 className="my-5">Our All Services</h2>
           <Row>
            {
                services.map(service => <SingleService key={service.id} service={service}></SingleService>)
            }
           </Row>
    
       </Container>
    );
};

export default Service;