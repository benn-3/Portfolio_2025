import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ReactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        profession: '',
        message: ''
    });

    useEffect(() => {
        // Initialize the map when the component mounts
        initMap();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email Id" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Your Phone No." value={formData.phone} onChange={handleChange} required />
                <input type="text" name="profession" placeholder="I am a*" value={formData.profession} onChange={handleChange} required />
                <textarea name="message" placeholder="Leave Message (Optional)" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
            <div id="map"></div> {/* Map container */}
        </div>
    );
}

ReactDOM.render(<ReactForm />, document.getElementById('react-form'));

export default ReactForm;
