import React from 'react';
import NavBar from '../componemts/NavBar';
import Footer from '../componemts/Footer';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to our Monthly Subscription Payment Gateway</h1>
          <p className="mt-4 text-xl text-gray-600">Simplify your subscription payments in one place!</p>
          <div className="mt-8">
            <a
              href="#subscription-plans"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg"
            >
              View Subscription Plans
            </a>
          </div>
        </div>
      </div>

      <div id="subscription-plans" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Choose Your Subscription Plan</h2>
            <p className="mt-4 text-xl text-gray-600">
              We offer a variety of subscription plans to fit your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Subscription plan cards go here */}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-xl">
            Sign up now and enjoy hassle-free monthly payments for your subscriptions.
          </p>
          <div className="mt-8">
            <a
              href="#signup"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Sign Up Today
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;
