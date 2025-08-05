//use user's input and dynamically update a specific property
import React, {  useState } from 'react';
import Table from './Table';


function PetForm({ onAddSubmission }) {
    const [formData, setFormData] = useState({
        petName: '',
        petType: '',
        breed: '',
        yourName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddSubmission(formData);

        setFormData({
            petName: '',
            petType: '',
            breed: '',
            yourName: '',
            email: '',
            phone: '',
        })
    };


    return (
        <form onSubmit={handleSubmit}>
            <input name="petName" value={formData.petName} onChange={handleChange} placeholder="Pet Name" />
            <input name="petType" value={formData.petType} onChange={handleChange} placeholder="Pet Type" />
            <input name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
            <input name="yourName" value={formData.yourName} onChange={handleChange} placeholder="Your Name" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone No." />
            <button type="submit">Submit</button>
        </form>
    );
}

function App() {
    const [submissions, setSubmissions] = useState([]);

    function handleAddSubmission(newEntry) {
        setSubmissions(prevSubmissions => [...prevSubmissions, newEntry]);
    }

    return (
        <>
            <PetForm onAddSubmission={handleAddSubmission} />
            <Table submissions={submissions} />
        </>
    );
}

// You should create a Table component separately

export default App;