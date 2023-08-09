import React, { useState } from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';


function Register() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Basic phone number validation using regular expression
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a 10-digit phone number.');
      return;
    }

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Send the form data to the backend server
    try {
      const response = await fetch('http://localhost:5000/register', { // Update the URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submitted successfully, reset the form state
        setFormData({
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        });

        // Reload the page after form submission
        window.location.reload();
      } else {
        // Handle server-side errors if needed
        alert('An error occurred during registration. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
