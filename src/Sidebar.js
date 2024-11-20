import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function HeaderWithSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    resources: false,
    community: false,
    accessibility: false,
    techniques: false,
    game: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  // const setSearch = (e)=>{
  //   setSearchItem(e.target.value);
  // }

  return (
    <div className="navbar">
      <button
        className="sidebar_button"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      >
        ☰
      </button>
      <Link to="/home" className="sooperstudieslink">SooperStudies</Link>
      <div className="nav-center">
         <div className="dropdown">
          <span className="headings resources" onClick={() => toggleDropdown('resources')}>Resources</span>
          {dropdownState.resources && (
            <div className="dropdown-content">
              <Link to="/pesu" onClick={closeSidebar}>PESU</Link>
              <Link to="/wikipedia" onClick={closeSidebar}>Wikipedia</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings community" onClick={() => toggleDropdown('community')}>Community</span>
          {dropdownState.community && (
            <div className="dropdown-content">
              <Link to="/events" onClick={closeSidebar}>Events</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings accessibility" onClick={() => toggleDropdown('accessibility')}>Accessibility</span>
          {dropdownState.accessibility && (
            <div className="dropdown-content">
              <Link to="/texttospeech" onClick={closeSidebar}>Text To Speech</Link>
              <Link to="/highcontrast" onClick={closeSidebar}>High contrast</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings study" onClick={() => toggleDropdown('techniques')}>Techniques</span>
          {dropdownState.techniques && (
            <div className="dropdown-content">
              <Link to="/pomodoro" onClick={closeSidebar}>Pomodoro</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings game" onClick={() => toggleDropdown('game')}>Game</span>
          {dropdownState.game && (
            <div className="dropdown-content">
              <Link to="/memorygames" onClick={closeSidebar}>Memory Games</Link>
            </div>
          )}
        </div>
      </div>
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar_content">
          <ul className="sidebar_list">
            <li className="sidebar_item"><Link to="/aboutus" onClick={closeSidebar}>About Us</Link></li>
            <li className="sidebar_item"><Link to="/logout" onClick={closeSidebar}>Logout</Link></li>
          </ul>
        </div>
        <button
          className="close_sidebar_button"
          onClick={closeSidebar}
          aria-label="Close Sidebar"
        >
          Close Sidebar
        </button>
      </div>
    </div>
  );
}

export default HeaderWithSidebar;
