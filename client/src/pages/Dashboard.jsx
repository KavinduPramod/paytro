import React from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
          <p className="mt-4 text-xl text-gray-600">Manage your subscriptions and payments with ease!</p>
        </div>

        {/* Your dashboard content goes here */}
        {/* For example, you can display the user's subscriptions and payment history */}
        {/* Replace this with your actual dashboard content */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Your Subscriptions</h2>
          <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
            {/* Subscription list or cards go here */}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Payment History</h2>
          <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
            {/* Payment history list or table goes here */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard;
