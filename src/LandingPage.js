import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  return (
    <div className="LandingPage-container">
      <h1>Welcome to the Landing Page</h1>
      <p>Please sign up or log in to continue.</p>
      <div className="button-container">
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
