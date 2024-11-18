import React from 'react';
import HeaderWithSidebar from '../Sidebar';

function Events() {
  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Events</h1>
        <p>Welcome to the events page! Here you can view and participate in upcoming events.</p>
        {/* Additional event content can be added here */}
      </div>
    </div>
  );
}

export default Events;
