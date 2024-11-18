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
  const [searchitem, setSearchItem]=useState('');

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(searchitem); 
      alert(`You searched for: ${searchitem}`); 
    }
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
              <Link to="/videos" onClick={closeSidebar}>Videos</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings community" onClick={() => toggleDropdown('community')}>Community</span>
          {dropdownState.community && (
            <div className="dropdown-content">
              <Link to="/events" onClick={closeSidebar}>Events</Link>
              <Link to="/discussions" onClick={closeSidebar}>Discussions</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings accessibility" onClick={() => toggleDropdown('accessibility')}>Accessibility</span>
          {dropdownState.accessibility && (
            <div className="dropdown-content">
              <button onClick={closeSidebar}>Text-to-Speech</button>
              <button onClick={closeSidebar}>Screen Readers</button>
              <button onClick={closeSidebar}>High Contrast</button>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings study" onClick={() => toggleDropdown('techniques')}>Techniques</span>
          {dropdownState.techniques && (
            <div className="dropdown-content">
              <Link to="/pomodoro" onClick={closeSidebar}>Pomodoro</Link>
              <Link to="/mindmaps" onClick={closeSidebar}>Mind Maps</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <span className="headings game" onClick={() => toggleDropdown('game')}>Game</span>
          {dropdownState.game && (
            <div className="dropdown-content">
              <Link to="/memorygames" onClick={closeSidebar}>Memory Games</Link>
              <Link to="/achievements" onClick={closeSidebar}>Achievements</Link>
            </div>
          )}
        </div>
      </div>
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar_content">
          <ul className="sidebar_list">
            <li className="sidebar_item"><Link to="/tasks" onClick={closeSidebar}>Tasks</Link></li>
            <li className="sidebar_item"><Link to="/notifications" onClick={closeSidebar}>Notifications</Link></li>
            <li className="sidebar_item"><Link to="/settings" onClick={closeSidebar}>Settings</Link></li>
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
      <div className="search">
        <input 
        type="text" 
        placeholder="Search..." 
        value={searchitem}
        onChange={(e)=>{setSearchItem(e.target.value)}}
        onKeyDown={handleKeyDown}/>
      </div>
    </div>
  );
}

export default HeaderWithSidebar;
