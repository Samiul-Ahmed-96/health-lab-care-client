import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const BookingModal = ({show,handleClose,singleService}) => {
    const {user} = useAuth();
    //Booking Submit Handler
    const { register, handleSubmit,formState: { errors } } = useForm();
     const onSubmit = data => {
         
         console.log(data);
         fetch('http://localhost:5000/appoinments',{

            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            
        })

     };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{singleService?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bookingForm">
                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} {...register("name")} />
                    <input defaultValue={user?.email} {...register("email", { required: true })} />
                    
                    <input defaultValue="pending" {...register("status",{ required: true })} />
                    <input defaultValue={singleService?.name} {...register("serviceName" ,{ required: true })} />
                    <input defaultValue={singleService?.price} {...register("servicePrice" ,{ required: true })} />
                    <input defaultValue={singleService?.img} {...register("image" ,{ required: true })} />
                    <input placeholder="Phone" defaultValue="" {...register("phone",{ required: true })} />
                    <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                    <input className="form-btn" type="submit" value="Book Now" />
                </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default BookingModal;