import React from 'react';
import HeaderWithSidebar from './Sidebar';
import './App.css';
import './Homepage.css';

function Homepage() {
  return (
    <div className="main">
      <HeaderWithSidebar />
      <div className="dashboard-container">
      {/* Welcome Message Section */}
      <div className="welcome-message">
        <h2>Welcome to SooperStudies!</h2>
        <p>We’re excited to have you here. Let’s make learning awesome!</p>
      </div>

      {/* Tasks To Do Section */}
      <div className="tasks-to-do">
        <h3>Tasks To Do</h3>
        <div className="tasks-grid">
          <div className="task-item">📘 Complete Math assignment</div>
          <div className="task-item">🧪 Review Science notes</div>
          <div className="task-item">📋 Prepare for the quiz</div>
        </div>
      </div>

      {/* Classes To Be Continued Section */}
      <div className="classes-to-continue">
        <h3>Classes To Be Continued</h3>
        <div className="classes-grid">
          <div className="class-item">🕒 Mathematics: 10:00 AM - 11:00 AM</div>
          <div className="class-item">🕒 Physics: 1:00 PM - 2:00 PM</div>
          <div className="class-item">🕒 Computer Science: 3:00 PM - 4:00 PM</div>
        </div>
      </div>
    </div>
    </div>
   );
}

export default Homepage;
