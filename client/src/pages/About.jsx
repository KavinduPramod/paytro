import React from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac aliquam elit, 
            vel dictum orci. Nulla bibendum, libero ac cursus iaculis, justo nisi lacinia est, 
            nec scelerisque augue urna in turpis.
          </p>
          <p className="mt-4 text-gray-600">
            In our mission to simplify subscription payments, we aim to provide a seamless and 
            user-friendly platform for managing all your monthly subscriptions in one place. 
            Whether it's streaming services, software subscriptions, or any other recurring expenses, 
            our payment gateway solution ensures convenience and peace of mind.
          </p>
          <p className="mt-4 text-gray-600">
            Join us on this journey as we revolutionize the way you handle your monthly payments. 
            We are committed to providing the best customer experience and helping you stay in control 
            of your finances effortlessly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About;
