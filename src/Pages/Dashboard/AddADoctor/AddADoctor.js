import React, { useState } from 'react';
import './AddADoctor.css';

const AddADoctor = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [designation,setDesignation] = useState("");
    const [image,setImage] = useState(null);
    console.log(email,name,designation,image)

    const handleSubmitDoctor = (e) =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('designation',designation);
        formData.append('img',image);
        console.log(formData);
        fetch("http://localhost:5000/doctors",{
            method : 'POST',
            body : formData
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div className="add-form">
            <h3>Add A Doctor</h3>
            <form onSubmit={handleSubmitDoctor}>
                <input type="text" onBlur={e => setName(e.target.value)} required placeholder="Doctor Name" />
                <input type="text" onBlur={e => setEmail(e.target.value)} required placeholder="Doctor Email" />
                <input type="text" onBlur={e => setDesignation(e.target.value)} required placeholder="Doctor Speciality" />
                <input type="file" onBlur={e => setImage(e.target.files[0])} required accept="image/*" />
                <input type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddADoctor;