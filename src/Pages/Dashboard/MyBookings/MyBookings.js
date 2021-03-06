import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyBookings.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [userBookings, setUserBookings] = useState([])

    useEffect(()=>{
        const url = `https://stormy-basin-00847.herokuapp.com/bookings`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setUserBookings(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `https://stormy-basin-00847.herokuapp.com/bookings/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount){
                    alert('Deleted');
                    const remaining = userBookings.filter(order => order._id !== id)
                    setUserBookings(remaining);
                }
            })
        }
        
    }
    const result = userBookings.filter(order => order.email === user.email);
    console.log(result)
    return (
        <div className="user-orders overflow-hidden">
        <h2 className="mb-3 fw-bold">My Bookings</h2>
        <Table className='text-center' striped bordered hover>
        <thead>
        <tr>
            <th className="w-25">Service Image</th>
            <th>Service Name</th>
            <th>Booked By</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        {
            result.length===0?(
                <Spinner className="text-center" animation="grow" variant="warning" />
            ):(
                <tbody>
            {
                result.map(order => <tr>
                    <td><img className='order-img' src={`data:image/png;base64,${order?.image}`} alt="" /></td>
                    <td>{order.serviceName}</td>
                    <td>{order.name}</td>
                    <td>{order.servicePrice}</td>
                    <td><button className="delete-btn" onClick={()=>handleDelete(order._id)}>Cancel <i class="fas fa-trash-alt"></i></button></td>
                </tr>)
            }
        </tbody>
            )
        }
        
    </Table>
        
        </div>
    );
};

export default MyOrders;