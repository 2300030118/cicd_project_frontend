import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Profile Icon
import { FiChevronRight, FiChevronDown } from "react-icons/fi"; // Side + Down arrows
import "../styles/Profile.css";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header" onClick={() => setOpen(!open)}>
        <FaUser className="profile-icon" />
        <span className="profile-text">Profile</span>
        {open ? (
          <FiChevronDown className="arrow-icon" />
        ) : (
          <FiChevronRight className="arrow-icon" />
        )}
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="profile-menu">
          <p className="menu-item">My Account</p>
          <p className="menu-item">Watchlist</p>
          <p className="menu-item">Downloads</p>
          <p className="menu-item">Playlists</p>
        </div>
      )}
    </div>
  );
}
