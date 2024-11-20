import React from 'react';
import HeaderWithSidebar from '../Sidebar';

function Wikipedia() {
  return(
    <div>
    <HeaderWithSidebar />
    <iframe src="https://www.wikipedia.org" width="1490px" height="788px" title="wiki"></iframe>
    </div>
  );
}

export default Wikipedia;
