import React from 'react';
import HeaderWithSidebar from '../Sidebar';

function Discussions() {
  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Discussions</h1>
        <p>Join the ongoing discussions or start a new one.</p>
        {/* Discussion content or forum-style content can be added here */}
      </div>
    </div>
  );
}

export default Discussions;
