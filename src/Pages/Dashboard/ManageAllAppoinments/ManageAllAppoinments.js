import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allBookings,setAllBookings] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/bookings`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllBookings(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `http://localhost:5000/bookings/${id}`;
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
        <div className="user-orders">
        <h2 className="mb-3 fw-bold">Manage All Orders</h2>
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
                        <td><img className='order-img' src={bookingItem.image} alt="" /></td>
                        <td>{bookingItem.watchName}</td>
                        <td>{bookingItem.name}</td>
                        <td>{bookingItem.singleWatchPrice}</td>
                        <td><button className="delete-btn" onClick={()=>handleDelete(bookingItem._id)}>Delete <i class="fas fa-trash-alt"></i></button></td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default ManageAllOrders;