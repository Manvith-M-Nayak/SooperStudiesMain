import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateInput = () => {
    if (username === '' || password === '') {
      setMessage('Please fill in all fields.');
      return false;
    }
    if (username === password) {
      setMessage("Username and password can't be the same.");
      return false;
    }
    if (username.length < 3 || password.length < 3) {
      setMessage('Username and password must be at least 3 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Validate inputs
    if (!validateInput()) {
      setUsername('');
      setPassword('');
      return;
    }

    const endpoint = isSignup ? '/signup' : '/login';
    const apiUrl = `http://localhost:5000/api/auth${endpoint}`;

    try {
      // Call the backend API
      const response = await axios.post(apiUrl, { username, password });

      // Handle login/signup success
      setMessage(response.data.message);

      if (!isSignup) {
        // If login is successful
        if (username === 'admin' && password === 'password') {
          setIsAuthenticated(true);
          navigate('/home'); // Navigate to home page for hardcoded user
        }
      }

      setUsername('');
      setPassword('');
    } catch (error) {
      // Handle error responses
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isSignup ? 'Signup' : 'Login'} Page</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username" style={{ display: 'block' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isSignup ? 'Signup' : 'Login'}
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}
        <button
          onClick={() => {
            setIsSignup(!isSignup);
            setMessage('');
          }}
          style={{
            marginLeft: '10px',
            padding: '5px 10px',
            backgroundColor: 'transparent',
            color: '#007BFF',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          {isSignup ? 'Login' : 'Signup'}
        </button>
      </p>
      {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
    </div>
  );
}

export default LoginPage;
