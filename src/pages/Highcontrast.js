import React, { useContext } from 'react';
import HeaderWithSidebar from '../Sidebar';
import { DarkModeContext } from './DarkModeContext';

function Highcontrast() {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div>
            <HeaderWithSidebar />
            <div className="content">
                <h1>High Contrast Mode</h1>
                <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
                <p>This is Highcontrast page content.</p>
            </div>
        </div>
    );
}

export default Highcontrast;
