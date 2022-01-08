import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://stormy-basin-00847.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container id="service" className="text-center">
      <h2 className="my-5">Our All Services</h2>
      {services.length === 0 ? (
        <Spinner className="text-center" animation="grow" variant="warning" />
      ) : (
        <Row>
          {services.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Service;
