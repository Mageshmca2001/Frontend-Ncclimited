// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';


function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="flex">
      {/* Sidebar */}


      {/* Main Content */}
      
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
        >
        <FaSignOutAlt className="mr-2" />  Logout
        </button>
      </div>
  
  );
}

export default Dashboard;
