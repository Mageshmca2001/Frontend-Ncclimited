import React, { useState } from 'react';
import '../Mac.css';

const Sidebar = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const handleSubmenuToggle = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null); // Close submenu if already open
    } else {
      setActiveSubmenu(index); // Open the clicked submenu
    }
  };

  return (
    <>
      <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
        <a href="#" className="logo">CodingLab</a>
        <div className="menu-content">
          <ul className="menu-items">
            <div className="menu-title">Your menu title</div>
            <li className="item">
              <a href="#">Your first link</a>
            </li>

            {/* Add User and View User */}
            <li className="item">
              <a href="#">Add User</a>
            </li>
            <li className="item">
              <a href="#">View User</a>
            </li>

            {/* Reports submenu */}
            <li className="item">
              <div
                className="submenu-item"
                onClick={() => handleSubmenuToggle(3)}
              >
                <span>Reports</span>
                <i className={`fa-solid fa-chevron-right ${activeSubmenu === 3 ? 'rotate' : ''}`}></i>
              </div>
              {activeSubmenu === 3 && (
                <ul className="menu-items submenu">
                  <div className="menu-title">
                    <i className="fa-solid fa-chevron-left" onClick={() => setActiveSubmenu(null)}></i>
                    Your submenu title
                  </div>
                  <li className="item"><a href="#">Daily Reports</a></li>
                  <li className="item"><a href="#">Monthly Reports</a></li>
                </ul>
              )}
            </li>

            <li className="item">
              <a href="#">Your second link</a>
            </li>
            <li className="item">
              <a href="#">Your third link</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar">
        <i
          className="fa-solid fa-bars"
          id="sidebar-close"
          onClick={toggleSidebar}
        ></i>
      </nav>
      <main className="main">
        <h1>Admin Dashboard Content</h1>
      </main>
    </>
  );
};

export default Sidebar;
