import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [allServices,setAllServices] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/services`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllServices(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount){
                    alert('Deleted');
                    const remaining = allServices.filter(product => product._id !== id)
                    setAllServices(remaining);
                }
            })
        }
        
    }
    return (
        <div className="user-orders">
        <h2 className="mb-3 fw-bold">Manage All Services</h2>
        <Table striped bordered hover className="text-center">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th className="w-25">Image</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    allServices.map(serviceItem => <tr>
                        <td>{serviceItem.name}</td>
                        <td>{serviceItem.price}</td>
                        <td>{serviceItem.rating}</td>
                        <td><img className="order-img" src={`data:image/png;base64,${serviceItem?.img}`} alt="" /></td>
                        <td><button className="delete-btn" onClick={()=>handleDelete(serviceItem._id)}>Delete <i class="fas fa-trash-alt"></i></button></td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default ManageAllProducts;