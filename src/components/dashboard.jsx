// src/components/Dashboard.js
import React from 'react';


const Dashboard = ({ handleLogout }) => (


  <div className="flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h2>
    <p className="mb-6 text-gray-700">You are now logged in.</p>
    <button
      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      onClick={handleLogout}
    >
      LOG OUT
    </button>
  </div>
);

export default Dashboard;