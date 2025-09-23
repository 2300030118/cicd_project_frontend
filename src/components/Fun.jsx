// Fun.jsx
import React, { useState } from "react";
import "../styles/Fun.css";
import { FaDownload } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

// Data for each fun category with images
const funData = {
  cartoons: {
    "Tom & Jerry": {
      image: "/images/tom_jerry.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"],
    },
    "Oggy & Cockroaches": {
      image: "/images/oggy_cockroaches.jpg",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Shinchan": {
      image: "/images/shinchan.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Motu Patlu": {
      image: "/images/motu_patlu.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Mr.Bean": {
      image: "/images/mr_bean.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Masha Abd the Bear": {
      image: "/images/masha_bear.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
  },
  performance: {
    "Dance Show": {
      image: "/images/dance_show.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Singing Stars": {
      image: "/images/sing_show.gif",
      episodes: ["Episode 1", "Episode 2"],
    },
    "Kids Talent Hunt": {
      image: "/images/talented.png",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
  },
  magic: {
    "Card Tricks": {
      image: "/images/card.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3"],
    },
    "Street Magic": {
      image: "/images/street_magic.gif",
      episodes: ["Episode 1", "Episode 2"],
    },
    "Stage Magic": {
      image: "/images/stage_magic.gif",
      episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"],
    },
  },
};

export default function Fun() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Handle back navigation
  const handleBack = () => {
    if (selectedEpisode) setSelectedEpisode(null);
    else if (selectedShow) setSelectedShow(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  const categoryList = [
    {
      title: "Funny Cartoons",
      type: "cartoons",
      icon: "🎬",
      image: "/images/cartoons.gif",
    },
    {
      title: "Dance & Music",
      type: "performance",
      icon: "💃",
      image: "/images/dance_music.gif",
    },
    {
      title: "Magic Tricks",
      type: "magic",
      icon: "🎩",
      image: "/images/magic.gif",
    },
  ];

  return (
    <section className="fun-container">
      {/* Back button */}
      {selectedCategory || selectedShow || selectedEpisode ? (
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      ) : null}

      {/* Top-level categories */}
      {!selectedCategory && (
        <>
          <h1 className="fun-heading">🎉 Fun Zone 🎉</h1>
          <p className="fun-subtitle">Cartoons, Music, Dance & Magic Shows!</p>
          <div className="fun-grid">
            {categoryList.map((cat) => (
              <div
                key={cat.type}
                className="fun-card"
                onClick={() => setSelectedCategory(cat.type)}
              >
                <img src={cat.image} alt={cat.title} className="fun-img" />
                <div className="fun-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Second-level: Shows */}
      {selectedCategory && !selectedShow && (
        <div className="fun-grid">
          {Object.entries(funData[selectedCategory]).map(([show, data]) => (
            <div
              key={show}
              className="fun-card"
              onClick={() => setSelectedShow(show)}
            >
              <img src={data.image} alt={show} className="fun-img" />
              <h3>{show}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Third-level: Episodes */}
      {selectedShow && !selectedEpisode && (
        <div className="videos-container">
          {funData[selectedCategory][selectedShow].episodes.map((ep) => (
            <div className="video-card" key={ep}>
              <h3>{ep}</h3>
              <button
                className="watch-btn"
                onClick={() => setSelectedEpisode(ep)}
              >
                ▶ Watch Now
              </button>
              <button className="watch-btn">
                <FaDownload /> Download
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Video Player */}
      {selectedEpisode && (
        <div className="video-player-wrapper">
          <h2>{selectedEpisode}</h2>
          <VideoPlayer
            src={`/videos/${selectedCategory}/${selectedShow}/${selectedEpisode}.mp4`}
            poster="/thumbnail.jpg"
          />
        </div>
      )}

      {/* Background Bubbles */}
      <div className="bubble-bg">
        {Array.from({ length: 30 }).map((_, idx) => (
          <div key={idx} className="bubble"></div>
        ))}
      </div>
    </section>
  );
}
