import React from 'react';
import '../Css/App.css';


function Dashboard({ handleLogout }) {
  return (
   
    
    
    
    
    <div className="container">
      
      <button className='logout-button' onClick={handleLogout}>
        Logout
      </button>
    </div>
 
  );

}



export default Dashboard;