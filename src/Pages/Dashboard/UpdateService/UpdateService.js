import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
    const url = `http://localhost:5000/services/${id}`
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
        <Row>
          <Col md={6} xs={12} sm={12}>
            <img
              className="w-50"
              src={`data:image/png;base64,${updateService?.img}`}
              alt=""
            />
            <h1>{updateService.name}</h1>
            <h1>{updateService.price}</h1>
            <h1>{updateService.description}</h1>
          </Col>
          <Col md={6} xs={12} sm={12}>
            <form onSubmit={handleUpdate}>
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
