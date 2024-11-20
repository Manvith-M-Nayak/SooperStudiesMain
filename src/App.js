import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import PESU from './pages/PESU';
import Wikipedia from './pages/Wikipedia';
import MemoryGames from './pages/MemoryGames';
import Logout from './pages/Logout';
import Pomodoro from './pages/Pomodoro';
import Events from './pages/Events';
import Aboutus from './pages/Aboutus';
import Texttospeech from './pages/Texttospeech';
import Highcontrast from './pages/Highcontrast';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/loginpage"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage username={username}/> : <LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/>
          }
        />
        <Route path="/"
          element={
            isAuthenticated ? <HomePage username={username}/> : <LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/>
          }
        />
        <Route path="/pesu" element={<PESU/>}/>
        <Route path="/wikipedia" element={<Wikipedia />}/>
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/memorygames" element={<MemoryGames/>}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/texttospeech" element={<Texttospeech/>}/>
        <Route path="/highcontrast" element={<Highcontrast/>}/>
      </Routes>
    </Router>
  );
}

export default App;
