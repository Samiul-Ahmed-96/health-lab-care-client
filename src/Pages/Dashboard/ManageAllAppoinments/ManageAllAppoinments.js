import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allBookings,setAllBookings] = useState([]);

    useEffect(()=>{
        const url = `https://stormy-basin-00847.herokuapp.com/bookings`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllBookings(data))
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
                    const remaining = allBookings.filter(product => product._id !== id)
                    setAllBookings(remaining);
                }
            })
        }
        
    }
    return (
        <div className="user-orders overflow-hidden">
        <h2 className="mb-3 fw-bold">Manage All Appoinments</h2>
        <Table className='text-center' striped bordered hover>
            <thead>
            <tr>
                <th className="w-25">Product Image</th>
                <th>Product Name</th>
                <th>Order By</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    allBookings.map(bookingItem => <tr>
                        <td><img className='order-img' src={`data:image/png;base64,${bookingItem?.image}`} alt="" /></td>
                        <td>{bookingItem.serviceName}</td>
                        <td>{bookingItem.name}</td>
                        <td>{bookingItem.servicePrice}</td>
                        <td><button className="delete-btn" onClick={()=>handleDelete(bookingItem._id)}>Delete <i class="fas fa-trash-alt"></i></button></td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default ManageAllOrders;