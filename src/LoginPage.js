import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert("Please fill in all fields");
    } else if (username === password) {
      alert("Username and password can't be the same.");
      setUsername('');
      setPassword('');
      return;
    } else if (username.length < 3 || password.length < 3) {
      alert('Username and password must be at least 3 characters long.');
      setUsername('');
      setPassword('');
      return;
    }

    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
