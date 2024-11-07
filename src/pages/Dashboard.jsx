// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64"> {/* Adds margin to avoid sidebar overlap */}
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
        >
        <FaSignOutAlt className="mr-2" />  Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
