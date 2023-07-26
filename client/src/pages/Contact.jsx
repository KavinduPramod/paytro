import React from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h1>
          {/* Your contact form goes here */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;