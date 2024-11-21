import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ setIsAuthenticated, setUsername }) {
  const [localUsername, setLocalUsername] = useState(''); // Renamed for clarity
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red'); // For success/error message colors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    if (localUsername === '' || password === '') {
      setMessage('Please fill in all fields.');
      setMessageColor('red');
      return;
    }

    try {
      const endpoint = isSignup ? '/signup' : '/login';
      const response = await axios.post(`http://localhost:5000/api/auth${endpoint}`, {
        username: localUsername,
        password,
      });

      // On successful login/signup
      if (response.status === 200 || response.status === 201) {
        setMessage(response.data.message);
        setMessageColor('green'); // Success message in green
        setIsAuthenticated(true); // Mark as authenticated
        setUsername(localUsername); // Update username state
        navigate('/home'); // Redirect to the home page
      }
    } catch (error) {
      // Handle errors
      setMessage(error.response?.data?.message || 'An error occurred.');
      setMessageColor('red'); // Error message in red
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
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
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
            setMessage(''); // Clear messages on toggle
            setMessageColor('red');
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

      {message && (
        <p style={{ marginTop: '20px', color: messageColor }}>{message}</p>
      )}
    </div>
  );
}

export default LoginPage;
