import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './BookingModal.css';

const BookingModal = ({show,handleClose,singleService}) => {
    const {user} = useAuth();
    //Booking Submit Handler
    const { register, handleSubmit,formState: { errors } ,reset } = useForm();
     const onSubmit = data => {
         
         console.log(data);
         fetch('https://stormy-basin-00847.herokuapp.com/appoinments',{

            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert("Booking Successfully")
            reset();
            
        })

     };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{singleService?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
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
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default BookingModal;