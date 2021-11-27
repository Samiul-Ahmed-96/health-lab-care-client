import React, { useState } from 'react';
import './AddProduct.css';

const AddAService = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [rating,setRating] = useState("");
    const [image,setImage] = useState(null);

    const handleSubmitDoctor = (e) =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('price',price);
        formData.append('rating',rating);
        formData.append('description',description);
        formData.append('img',image);
        console.log(formData);
        fetch("https://stormy-basin-00847.herokuapp.com/services",{
            method : 'POST',
            body : formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully Added')
            }
        })

    }
    return (
        <div className="add-form">
            <h3>Add A Service</h3>
            <form onSubmit={handleSubmitDoctor}>
                <input type="text" onBlur={e => setName(e.target.value)} required placeholder="Service Name" />
                <input type="text" onBlur={e => setPrice(e.target.value)} required placeholder="Price" />
                <input type="text" onBlur={e => setDescription(e.target.value)} required placeholder="Description" />
                <input type="text" onBlur={e => setRating(e.target.value)} required placeholder="Rating" />
                <input type="file" onBlur={e => setImage(e.target.files[0])} required accept="image/*" />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddAService;