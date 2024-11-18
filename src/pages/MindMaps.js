import React from 'react';
import HeaderWithSidebar from '../Sidebar';

function Mindmaps() {
  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Mind Maps</h1>
        <p>Explore the benefits of using mind maps for study and planning.</p>
        {/* Interactive Mind Map feature can be added here */}
      </div>
    </div>
  );
}

export default Mindmaps;
