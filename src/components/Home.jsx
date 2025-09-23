import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../styles/Home.css";
import Profile from "./Profile"; // Profile component

function Home() {
  return (
    <div className="homepage">
      {/* Header/Navbar */}
      <header className="header">
        <div className="logo">StreamFlix</div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="auth-buttons">
          {/* Language Dropdown */}
          <select className="language-select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese (Simplified)</option>
            <option value="zh-TW">Chinese (Traditional)</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="pt">Portuguese</option>
            <option value="bn">Bengali</option>
            <option value="pa">Punjabi</option>
            <option value="ur">Urdu</option>
            <option value="vi">Vietnamese</option>
            <option value="it">Italian</option>
            <option value="tr">Turkish</option>
            <option value="fa">Persian (Farsi)</option>
            <option value="sw">Swahili</option>
            <option value="th">Thai</option>
            <option value="ms">Malay</option>
            <option value="tl">Filipino / Tagalog</option>
            <option value="ta">Tamil</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="te">Telugu</option>
            <option value="or">Odia</option>
            <option value="si">Sinhala</option>
            <option value="my">Burmese</option>
            <option value="km">Khmer</option>
            <option value="lo">Lao</option>
            <option value="am">Amharic</option>
            <option value="ha">Hausa</option>
            <option value="yo">Yoruba</option>
            <option value="ig">Igbo</option>
            <option value="zu">Zulu</option>
            <option value="mn">Mongolian</option>
            <option value="ne">Nepali</option>
            <option value="tk">Turkmen</option>
            <option value="ky">Kyrgyz</option>
            <option value="uz">Uzbek</option>
            <option value="kk">Kazakh</option>
            <option value="ps">Pashto</option>
            <option value="sd">Sindhi</option>
            <option value="ks">Kashmiri</option>
          </select>

          {/* Auth Buttons */}
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>

          {/* Profile Dropdown Component */}
          <Profile />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="typewriter">StreamFlix</h1>
        <p className="subtitle">Your one-stop solution for learning & fun!</p>

        {/* Centered Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <Link to="/kids" className="category-card kids">
          <img src="/images/Kids_1.gif" alt="Kids" />
          <h3>Kids</h3>
        </Link>

        <Link to="/students" className="category-card students">
          <img src="/images/Students_2.gif" alt="Students" />
          <h3>Students</h3>
        </Link>

        <Link to="/parents" className="category-card parents">
          <img src="/images/Parents_1.gif" alt="Parents" />
          <h3>Parents</h3>
        </Link>

        <Link to="/fun" className="category-card fun">
          <img src="/images/Fun_1.gif" alt="Fun" />
          <h3>Fun</h3>
        </Link>

        <Link to="/seniors" className="category-card seniors">
          <img src="/images/Seniors_4.webp" alt="Seniors" />
          <h3>Senior Citizens</h3>
        </Link>
      </section>
    </div>
  );
}

export default Home;
