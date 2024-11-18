import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import PESU from './pages/PESU';
import Wikipedia from './pages/Wikipedia';
import Videos from './pages/Videos';
import Tasks from './pages/Tasks';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Events from './pages/Events';
import Discussions from './pages/Discussions';
import Pomodoro from './pages/Pomodoro';
import MindMaps from './pages/MindMaps';
import MemoryGames from './pages/MemoryGames';
import Achievements from './pages/Achievements';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/loginpage"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route path="/"
          element={
            isAuthenticated ? <HomePage /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route path="/pesu" element={<PESU/>}/>
        <Route path="/wikipedia" element={<Wikipedia />}/>
        <Route path="/videos" element={<Videos />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/discussions" element={<Discussions />}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="/mindmaps" element={<MindMaps/>}/>
        <Route path="/memorygames" element={<MemoryGames/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
      </Routes>
    </Router>
  );
}

export default App;
