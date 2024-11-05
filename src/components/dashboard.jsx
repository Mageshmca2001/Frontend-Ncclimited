import React from 'react';

function Dashboard({ handleLogout }) {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
