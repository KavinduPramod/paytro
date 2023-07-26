import React from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';
function plans() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Subscription Plans</h1>
          {/* Your subscription plans and details go here */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Basic Plan</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac aliquam elit. 
            </p>
            <p className="text-indigo-500 font-semibold mt-2">Price: $9.99/month</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Standard Plan</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac aliquam elit. 
            </p>
            <p className="text-indigo-500 font-semibold mt-2">Price: $19.99/month</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Premium Plan</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac aliquam elit. 
            </p>
            <p className="text-indigo-500 font-semibold mt-2">Price: $29.99/month</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default plans;
