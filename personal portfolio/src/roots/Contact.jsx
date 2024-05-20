import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
	const [formData, setFormData] = useState({
	  name: '',
	  email: '',
	  message: '',
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setFormData({
		...formData,
		[name]: value,
	  });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // Handle form submission logic (e.g., send data to a server or API)
	  console.log('Form submitted:', formData);
	};
  
	return (
	  <div>
		<Link to="/">Home</Link>
		<h2>Contact</h2>
		<form className="contact-form" onSubmit={handleSubmit}>
		  <div className="form-group">
			<label htmlFor="name">Name:</label>
			<input
			  type="text"
			  id="name"
			  name="name"
			  value={formData.name}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <div className="form-group">
			<label htmlFor="email">Email:</label>
			<input
			  type="email"
			  id="email"
			  name="email"
			  value={formData.email}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <div className="form-group">
			<label htmlFor="message">Message:</label>
			<textarea
			  id="message"
			  name="message"
			  value={formData.message}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <button type="submit">Submit</button>
		</form>
	  </div>
	);
  };