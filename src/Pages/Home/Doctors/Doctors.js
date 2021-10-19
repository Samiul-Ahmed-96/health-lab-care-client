import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <Container id="doctors" className='text-center'>
        <div className="section-heading">
            <h2>Meet Our Qualified <span>Doctors</span> </h2>
            <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
        </div>
       <Row>
        {
            doctors.map (doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
        }
       </Row>
   </Container>
    );
};

export default Doctors;