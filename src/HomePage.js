import React from 'react';
import HeaderWithSidebar from './Sidebar';
import './App.css';
import './Homepage.css';

function Homepage({ username }) {
  return (
    <div className="main">
      <HeaderWithSidebar />
      <div className="dashboard-container">
        <div className="welcome-message">
        <h2>Welcome to SooperStudies, {username}</h2>
          <p>We’re excited to have you here. Let’s make learning awesome!</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
