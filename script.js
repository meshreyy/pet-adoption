//use user's input and dynamically update a specific property
import React, { use, useState } from 'react';

function PetForm()
{
    const [formData, setFormData] = useState({
        petName: '',
        petType: '',
        breed: '',
        yourName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <form>
            <input
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            placeholder="Pet Name"
            />
             <input
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            placeholder="Pet Type"
            />
             <input
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            placeholder="Breed"
            />
             <input
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            placeholder="Your Name"
            />
             <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="PEmail"
            />
             <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No."
            />
            
        </form>
    )
}
