import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      // call parent handler (can also verify from backend)
      if (onLogin) {
        onLogin(username);
      }

      // ✅ Redirect to Home after login
      navigate("/");
    } else {
      alert("⚠ Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome!</h1>
      <p className="login-subtitle">Login to continue</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
}
