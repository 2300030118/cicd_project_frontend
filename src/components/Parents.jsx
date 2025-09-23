import React, { useState, useEffect } from "react";
import "../styles/Parents.css";
import VideoPlayer from "./VideoPlayer";

export default function Parents() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPasswords, setValidPasswords] = useState(["eldersOnly123"]);
  const [bubbles, setBubbles] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Floating bubbles
  useEffect(() => {
    const bubbleArray = [];
    for (let i = 0; i < 30; i++) {
      bubbleArray.push({
        id: i,
        size: Math.random() * 25 + 15,
        left: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
      });
    }
    setBubbles(bubbleArray);
  }, []);

  // Unlock password
  const handleUnlock = () => {
    if (validPasswords.includes(password)) {
      setIsUnlocked(true);
      setPassword("");
    } else alert("❌ Incorrect parent password!");
  };

  // Forgot password
  const handleForgotPassword = () => {
    if (!email) {
      alert("📧 Please enter your email.");
      return;
    }
    alert(`✅ Reset link sent to ${email}`);
    setForgotPassword(false);
    setResetPassword(true);
  };

  // Reset password
  const handleResetPassword = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("⚠ Please fill all fields!");
      return;
    }
    if (!validPasswords.includes(oldPassword)) {
      alert("❌ Old password incorrect!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("❌ New password and confirm password do not match!");
      return;
    }
    setValidPasswords((prev) =>
      prev.filter((p) => p !== oldPassword).concat(newPassword)
    );
    alert("✅ Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setResetPassword(false);
  };

  // Full Media Data
  const mediaData = {
    movies: {
      Telugu: {
        Drama: [
          { title: "Jersey", video: "/videos/jersey.mp4" },
          { title: "Mahanati", video: "/videos/mahanati.mp4" },
          { title: "Sita Ramam", video: "/videos/sitaramam.mp4" },
          { title: "Bommarillu", video: "/videos/bommarillu.mp4" },
          { title: "Geetha Govindam", video: "/videos/geethagovindam.mp4" },
        ],
        Action: [
          { title: "RRR", video: "/videos/rrr.mp4" },
          { title: "Pushpa", video: "/videos/pushpa.mp4" },
          { title: "Liger", video: "/videos/liger.mp4" },
          { title: "Vikramarkudu", video: "/videos/vikramarkudu.mp4" },
          { title: "Sye", video: "/videos/sye.mp4" },
        ],
        Thriller: [
          { title: "Karthikeya 2", video: "/videos/karthikeya2.mp4" },
          { title: "Drushyam 2", video: "/videos/drushyam2.mp4" },
          { title: "Awe", video: "/videos/awe.mp4" },
          { title: "Goodachari", video: "/videos/goodachari.mp4" },
          { title: "Ekkadiki Pothavu Chinnavada", video: "/videos/ekkadiki.mp4" },
        ],
        Horror: [
          { title: "Arundhati", video: "/videos/arundhati.mp4" },
          { title: "Anando Brahma", video: "/videos/anandobrahma.mp4" },
          { title: "Raju Gari Gadhi 2", video: "/videos/rajugarigadhi2.mp4" },
          { title: "Avunu", video: "/videos/avunu.mp4" },
          { title: "Prema Katha Chitram", video: "/videos/pkchitram.mp4" },
        ],
        Comedy: [
          { title: "F2", video: "/videos/f2.mp4" },
          { title: "Jathi Ratnalu", video: "/videos/jathiratnalu.mp4" },
          { title: "Bhale Bhale Magadivoy", video: "/videos/bbm.mp4" },
          { title: "Venky Mama", video: "/videos/venkymama.mp4" },
          { title: "Nuvvu Naaku Nachav", video: "/videos/nuvvunaaku.mp4" },
        ],
      },
      Hindi: {
        Drama: [
          { title: "Kalank", video: "/videos/kalank.mp4" },
          { title: "Kabir Singh", video: "/videos/kabirsingh.mp4" },
          { title: "Hum Dil De Chuke Sanam", video: "/videos/humdil.mp4" },
          { title: "Ae Dil Hai Mushkil", video: "/videos/aedil.mp4" },
          { title: "Jab We Met", video: "/videos/jabwemet.mp4" },
        ],
        Action: [
          { title: "Pathaan", video: "/videos/pathaan.mp4" },
          { title: "War", video: "/videos/war.mp4" },
          { title: "KGF", video: "/videos/kgf.mp4" },
          { title: "Shershaah", video: "/videos/shershaah.mp4" },
          { title: "Raees", video: "/videos/raees.mp4" },
        ],
        Thriller: [
          { title: "Andhadhun", video: "/videos/andhadhun.mp4" },
          { title: "Drishyam", video: "/videos/drishyam.mp4" },
          { title: "Rahasya", video: "/videos/rahasya.mp4" },
          { title: "Kahaani", video: "/videos/kahaani.mp4" },
          { title: "Badla", video: "/videos/badla.mp4" },
        ],
        Horror: [
          { title: "Raaz", video: "/videos/raaz.mp4" },
          { title: "Bhoot", video: "/videos/bhoot.mp4" },
          { title: "1920", video: "/videos/1920.mp4" },
          { title: "Stree", video: "/videos/stree.mp4" },
          { title: "Pari", video: "/videos/pari.mp4" },
        ],
        Comedy: [
          { title: "Hera Pheri", video: "/videos/hera_pheri.mp4" },
          { title: "Bhool Bhulaiyaa", video: "/videos/bhoolbhulaiyaa.mp4" },
          { title: "Andaz Apna Apna", video: "/videos/andaz.mpna.mp4" },
          { title: "3 Idiots", video: "/videos/3idiots.mp4" },
          { title: "Munna Bhai MBBS", video: "/videos/munna.mp4" },
        ],
      },
    },
    shows: {
      Telugu: [
        { title: "Karthika Deepam", video: "/videos/karthikadeepam.mp4" },
        { title: "Illu Illalu Pillalu", video: "/videos/illuillalupillalu.mp4" },
        { title: "Gunde Ninda Gudigantalu", video: "/videos/gundenindagudigantalu.mp4" },
        { title: "Intinti Ramayanam", video: "/videos/intintiramayanam.mp4" },
        { title: "Chinni", video: "/videos/chinni.mp4" },
      ],
      Hindi: [
        { title: "Taarak Mehta Ka Ooltah Chashmah", video: "/videos/taarak.mp4" },
        { title: "Naagin", video: "/videos/naagin.mp4" },
        { title: "Yeh Rishta Kya Kehlata Hai", video: "/videos/yehrishta.mp4" },
        { title: "Kundali Bhagya", video: "/videos/kundali.mp4" },
        { title: "Anupamaa", video: "/videos/anupamaa.mp4" },
      ],
    },
    news: {
      Telugu: [
        { title: "TV9", video: "/videos/tv9news.mp4" },
        { title: "NTV", video: "/videos/ntvnews.mp4" },
        { title: "TV5", video: "/videos/tv5news.mp4" },
        { title: "V6 News", video: "/videos/v6news.mp4" },
        { title: "ETV Andhra Pradesh", video: "/videos/etv_ap.mp4" },
      ],
      Hindi: [
        { title: "ABP News", video: "/videos/abp.mp4" },
        { title: "Zee News", video: "/videos/zee.mp4" },
        { title: "Aaj Tak", video: "/videos/aajtak.mp4" },
        { title: "NDTV", video: "/videos/ndtv.mp4" },
        { title: "Republic TV", video: "/videos/republic.mp4" },
      ],
    },
    music: {
      Telugu: {
        Sad: [
          { title: "SPB Sad", video: "/videos/spb_sad.mp4" },
          { title: "Chitra Sad", video: "/videos/chitra_sad.mp4" },
          { title: "Geetha Madhuri Sad", video: "/videos/geethamadhuri_sad.mp4" },
          { title: "Sunitha Sad", video: "/videos/sunitha_sad.mp4" },
          { title: "Karthik Sad", video: "/videos/karthik_sad.mp4" },
        ],
        Love: [
          { title: "SPB Love", video: "/videos/spb_love.mp4" },
          { title: "Chitra Love", video: "/videos/chitra_love.mp4" },
          { title: "Geetha Madhuri Love", video: "/videos/geethamadhuri_love.mp4" },
          { title: "Sunitha Love", video: "/videos/sunitha_love.mp4" },
          { title: "Karthik Love", video: "/videos/karthik_love.mp4" },
        ],
      },
      Hindi: {
        Sad: [
          { title: "Arijit Sad", video: "/videos/arijit_sad.mp4" },
          { title: "Shreya Sad", video: "/videos/shreya_sad.mp4" },
          { title: "Neha Sad", video: "/videos/neha_sad.mp4" },
          { title: "Sonu Sad", video: "/videos/sonu_sad.mp4" },
          { title: "Udit Sad", video: "/videos/udit_sad.mp4" },
        ],
        Love: [
          { title: "Arijit Love", video: "/videos/arijit_love.mp4" },
          { title: "Shreya Love", video: "/videos/shreya_love.mp4" },
          { title: "Neha Love", video: "/videos/neha_love.mp4" },
          { title: "Sonu Love", video: "/videos/sonu_love.mp4" },
          { title: "Udit Love", video: "/videos/udit_love.mp4" },
        ],
      },
    },
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setSelectedPage(null);
  };

  const handleDownload = (video) => {
    const link = document.createElement("a");
    link.href = video;
    link.download = video.split("/").pop();
    link.click();
  };

  const handleBack = () => {
    setSelectedVideo(null);
    setSelectedCategory(null);
    setSelectedLanguage(null);
    setSelectedPage(null);
  };

  return (
    <div className="parents-container">
      <div className="bubble-container">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {!isUnlocked ? (
        <>
          {!forgotPassword && !resetPassword ? (
            <div className="parents-login">
              <h2 className="parents-heading">🔒 Parents Section</h2>
              <input
                type="password"
                placeholder="Enter Parent Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleUnlock}>Unlock</button>
              <p className="forgot-password" onClick={() => setForgotPassword(true)}>Forgot Password?</p>
              <p className="reset-password" onClick={() => setResetPassword(true)}>Reset Password</p>
            </div>
          ) : forgotPassword ? (
            <div className="forgot-password-container">
              <h2>📧 Forgot Password</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleForgotPassword}>Send Reset Link</button>
              <p onClick={() => setForgotPassword(false)}>Back to Login</p>
            </div>
          ) : (
            <div className="reset-password-container">
              <h2>🔑 Reset Password</h2>
              <input
                type="password"
                placeholder="Enter Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={handleResetPassword}>Update Password</button>
              <p onClick={() => setResetPassword(false)}>Back to Login</p>
            </div>
          )}
        </>
      ) : selectedVideo ? (
        <div className="video-page">
          <button className="back-btn" onClick={handleBack}>⬅ Back</button>
          <VideoPlayer videoUrl={selectedVideo} onClose={handleBack} />
        </div>
      ) : selectedPage ? (
        <div className="media-page">
          <button className="back-btn" onClick={handleBack}>⬅ Back</button>
          {!selectedLanguage && (
            <div className="categories-container">
              <h2>Select Language</h2>
              {Object.keys(mediaData[selectedPage]).map((lang) => (
                <button key={lang} onClick={() => setSelectedLanguage(lang)}>{lang}</button>
              ))}
            </div>
          )}

          {/* Category for movies & music */}
          {selectedLanguage && (selectedPage === "movies" || selectedPage === "music") && !selectedCategory && (
            <div className="categories-container">
              <h2>Select Category</h2>
              {Object.keys(mediaData[selectedPage][selectedLanguage]).map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</button>
              ))}
            </div>
          )}

          {/* Grid of items */}
          {((selectedPage === "movies" && selectedCategory) ||
            (selectedPage === "music" && selectedCategory) ||
            (selectedPage === "shows" && selectedLanguage) ||
            (selectedPage === "news" && selectedLanguage)) && (
            <div className="grid-container">
              {(selectedPage === "movies"
                ? mediaData.movies[selectedLanguage][selectedCategory]
                : selectedPage === "music"
                ? mediaData.music[selectedLanguage][selectedCategory]
                : mediaData[selectedPage][selectedLanguage]
              ).map((item) => (
                <div className="grid-item" key={item.title}>
                  <p>{item.title}</p>
                  <div className="button-group">
                    <button onClick={() => handleVideoSelect(item.video)}>Watch</button>
                    <button onClick={() => handleDownload(item.video)}>Download</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bars-container">
          {[
            { id: 1, title: "👨‍👩‍👧 Check Kids Progress", img: "/images/Kids_2.gif", page: "kids" },
            { id: 2, title: "🎬 Watch Movies", img: "/images/movie_time.gif", page: "movies" },
            { id: 3, title: "📺 Enjoy Shows", img: "/images/shows.gif", page: "shows" },
            { id: 4, title: "📰 Latest News", img: "/images/news.gif", page: "news" },
            { id: 5, title: "🎵 Relax with Music", img: "/images/music.gif", page: "music" },
          ].map((item) => (
            <div className="parent-bar" key={item.id}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              {item.page === "kids" ? (
                <div className="button-group">
                  <button onClick={() => alert("✅ Kids Report Checked!")}>Check Report</button>
                </div>
              ) : (
                <div className="button-group">
                  <button onClick={() => setSelectedPage(item.page)}>Open</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
