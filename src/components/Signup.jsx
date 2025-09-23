import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("choose");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const safeParseJson = (text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      username.trim() &&
      email.trim() &&
      phone.trim() &&
      password.trim() &&
      role &&
      gender
    ) {
      try {
        setLoading(true);
        const response = await fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: username,
            email,
            password,
            role,
          }),
        });

        const raw = await response.text();
        const data = safeParseJson(raw) || {};

        if (!response.ok || data.success === false) {
          const message = data.message || raw || "Signup failed";
          alert(message);
          return;
        }

        const createdId = data?.user?.id;
        if (createdId) {
          localStorage.setItem("userId", String(createdId));
        }
        if (onSignup) {
          onSignup({ username, email, phone, role, gender, id: createdId });
        }
        navigate("/payment");
      } catch (err) {
        alert("Network error while signing up");
      } finally {
        setLoading(false);
      }
    } else {
      alert("⚠ Please fill all fields");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create Account</h1>
      <p className="signup-subtitle">Join us and start streaming!</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="signup-select"
        >
          <option value="choose">Admin</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="kids">Kids</option>
          <option value="senior citizens">Senior</option>
        </select>

        {/* Gender Selection */}
        <div className="gender-group">
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Female
          </label>
        </div>

        <button type="submit" className="signup-btn" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}
