import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(existingData => ({
            ...existingData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!/@/.test(formData.email)) {
            alert('Please use a valid email!')
            return
        }
        console.log(formData)
    }
return (
    <div>
    <h2>Contact</h2>
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required name='name' onChange={handleChange}></input>
        <label>Email:</label>
        <input type="text" required name='email' onChange={handleChange}></input>
        <label>Message:</label>
        <input type="text" required name='message' onChange={handleChange}></input>
        <button type='Submit'>Submit</button>
    </form>
    </div>
)
}

export default Contact