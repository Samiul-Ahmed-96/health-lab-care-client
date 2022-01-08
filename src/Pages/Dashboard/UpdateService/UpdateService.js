import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const UpdateService = () => {
    //Get the ID 
    const {id} = useParams();

    const [updateService,setUpdateService] = useState({})
    console.log(updateService);

     //Data load
     useEffect(()=>{
        fetch(`https://stormy-basin-00847.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setUpdateService(data))
    },[id])

    //Update
    const handleUpdate = (e) =>{
        e.preventDefault();
    }
    return (
        <section className='update-service'>
            <Container>
                <Row>
                    <Col md={6} xs={12} sm={12}>
                        <img className="w-50" src={`data:image/png;base64,${updateService?.img}`} alt="" />
                    </Col>
                    <Col md={6} xs={12} sm={12}>
                        <form onSubmit={handleUpdate}>
                            <input type="text" value={updateService?.name}></input>
                            <input type="text" value={updateService?.price}></input>
                            <input type="text" value={updateService?.rating}></input>
                            <textarea type="text" value={updateService?.description}></textarea>
                            <input type="submit" value="Update"></input>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default UpdateService;