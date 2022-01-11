import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './UpdateService.css';

const UpdateService = () => {
  //Get the ID
  const { id } = useParams();

  const [updateService, setUpdateService] = useState({});
  console.log(updateService);

  //Data load
  useEffect(() => {
    fetch(`https://stormy-basin-00847.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateService(data));
  }, [id]);

  //update Service
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedService = {
      name: updatedName,
      img: updateService.img,
      price: updateService.price,
      rating: updateService.rating,
      description: updateService.description,
    };

    setUpdateService(updatedService);
  };

  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedService = {
      name: updateService.name,
      img: updateService.img,
      price: updatedPrice,
      rating: updateService.rating,
      description: updateService.description,
    };

    setUpdateService(updatedService);
  };
  const handleDrescptionChange = (e) => {
    const updatedDrescription = e.target.value;
    const updatedService = {
      name: updateService.name,
      img: updateService.img,
      price: updateService.price,
      rating: updateService.rating,
      description: updatedDrescription,
    };

    setUpdateService(updatedService);
  };
  //Update
  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `https://stormy-basin-00847.herokuapp.com/services/${id}`
    fetch(url,{
        method : "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(updateService)
    }) 
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount===1){
            alert('Update Successfully');
        }
        
    })
  };
  return (
    <section className="update-service">
      <Container>
        <Row className="align-items-center my-5">
          <Col md={6} xs={12} sm={12}>
            <div className="update-item">
            <img
            className="w-50"
            src={`data:image/png;base64,${updateService?.img}`}
            alt=""
          />
          <h3>Name : {updateService.name}</h3>
          <h2>Price : {updateService.price}</h2>
          <p>Description : {updateService.description}</p>
            </div>
          </Col>
          <Col md={6} xs={12} sm={12}>
          <h2 className="my-3">Update Service</h2>
            <form className="update-form" onSubmit={handleUpdate}>
              <input
                type="text"
                onChange={handleNameChange}
                value={updateService?.name}
              ></input>
              <input
                type="text"
                onChange={handlePriceChange}
                value={updateService?.price}
              ></input>
              <textarea
                type="text"
                onChange={handleDrescptionChange}
                value={updateService?.description}
              ></textarea>
              <input type="submit" value="Update"></input>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UpdateService;
