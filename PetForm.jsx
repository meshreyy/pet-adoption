import { useState } from "react";

export default function PetForm() {
    const [formData, setFormData] = useState({
        petName: "",
        petType: "",
        breed: "",
        yourName: "",
        email: "",
        phone: ""
    });

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Pet Name"
                value={formData.petName}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        petName: e.target.value
                    })
                } />
            <select
                value={formData.petType}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        petType: e.target.value
                    })
                }>
                <option value="">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
            </select>

            <input
                type="text"
                placeholder="Breed"
                value={formData.breed}
                onChange={e => setFormData({ ...formData, breed: e.target.value })}
            />
            <input
                type="text"
                placeholder="Your Name"
                value={formData.yourName}
                onChange={e => setFormData({ ...formData, yourName: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />

            <button type="submit">Submit</button>


        </form>
    );
}