import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://stormy-basin-00847.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section className="doctors-container">
      <Container id="doctors" className="text-center">
        <div className="section-heading">
          <h2>
            Meet Our Qualified <span>Doctors</span>{" "}
          </h2>
          <p>
            We are dedicated to providing best-in-class services and outcomes
            through Respiratory and Sleep Therapy
          </p>
        </div>

        {doctors.length === 0 ? (
          <Spinner className="text-center" animation="grow" variant="warning" />
        ) : (
          <Row>
            {doctors.map((doctor) => (
              <Doctor key={doctor._id} doctor={doctor}></Doctor>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Doctors;
