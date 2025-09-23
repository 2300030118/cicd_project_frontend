import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About StreamFlix</h1>
      <p className="about-subtitle">
        Your one-stop platform for learning, fun, and entertainment!
      </p>

      <div className="about-features">
        <div className="feature-card">
          <h2>Comedies & Cartoons</h2>
          <p>Enjoy fun and laughter for kids and families alike.</p>
        </div>
        <div className="feature-card">
          <h2>Educational Content</h2>
          <p>Interactive learning videos for students of all ages.</p>
        </div>
        <div className="feature-card">
          <h2>Live Streaming</h2>
          <p>Watch your favorite shows, events, and classes live!</p>
        </div>
      </div>

      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/images/deekshitha.jpg" alt="Team Member" />
            <h3>Deekshitha</h3>
            <p>Frontend Development</p>
          </div>
          <div className="team-card">
            <img src="/images/sarvani.jpg" alt="Team Lead" />
            <h3>Sarvani</h3>
            <p>Backend Development</p>
          </div>
          <div className="team-card">
            <img src="/images/dhatri.jpg" alt="Team Member" />
            <h3>Dhatri</h3>
            <p>Deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
