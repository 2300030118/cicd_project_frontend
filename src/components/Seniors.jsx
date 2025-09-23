// Seniors.jsx
import React, { useState } from "react";
import "../styles/Seniors.css";
import { FaDownload } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

const seniorsData = {
  "Current Affairs": {
    image: "/images/Seniors_1.gif",
    topics: {
      "National News": [
        { title: "Today’s Top News", image: "/images/news_today.gif" },
        { title: "Politics Update", image: "/images/politics news.gif" },
        { title: "Economy Watch", image: "/images/economy.gif" },
      ],
      "International News": [
        { title: "Global Headlines", image: "/images/global_news.gif" },
        { title: "UN Updates", image: "/images/un updates.gif" },
        { title: "World Leaders", image: "/images/world_leader.gif" },
      ],
      "Daily Updates": [
        { title: "Morning Briefing", image: "/images/morning update.webp" },
        { title: "Evening Recap", image: "/images/evening recap.gif" },
      ],
    },
  },
  "Health Tips": {
    image: "/images/Seniors_2.gif",
    topics: {
      "Healthy Eating": [
        { title: "Balanced Diet", image: "/images/balanced_diet.gif" },
        { title: "Superfoods", image: "/images/superfood.gif" },
        { title: "Meal Planning", image: "/images/meal_planning.gif" },
      ],
      "Home Remedies": [
        { title: "Cold & Cough", image: "/images/cold-cough.jpg" },
        { title: "Joint Pain Relief", image: "/images/joint-pain.jpg" },
        { title: "Good Sleep", image: "/images/good-sleep.jpg" },
      ],
      "Doctor’s Advice": [
        { title: "Blood Pressure Care", image: "/images/blood-pressure.jpg" },
        { title: "Diabetes Control", image: "/images/diabetes.jpg" },
        { title: "Heart Health", image: "/images/heart health.jpg" },
      ],
    },
  },
  "Yoga": {
    image: "/images/Seniors_3.gif",
    topics: {
      "Morning Yoga": [
        { title: "15-min Routine", image: "/images/15-min-yoga.jpg" },
        { title: "Sun Salutations", image: "/images/sun.webp" },
        { title: "Energy Boost", image: "/images/energy-boost.jpg" },
      ],
      "Stress Relief Yoga": [
        { title: "Relaxation Poses", image: "/images/relaxation.jpg" },
        { title: "Mind Calming", image: "/images/calm-mind.jpg" },
        { title: "Sleep Yoga", image: "/images/sleep-yoga.jpg" },
      ],
      "Breathing Exercises": [
        { title: "Deep Breathing", image: "/images/deep-breath.jpg" },
        { title: "Pranayama", image: "/images/pranayama.jpg" },
        { title: "Kapalabhati", image: "/images/kapalbhathi.jpg" },
      ],
    },
  },
};

export default function Seniors() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleBack = () => {
    if (selectedVideo) setSelectedVideo(null);
    else if (selectedTopic) setSelectedTopic(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  return (
    <section className="seniors-page">
      <header className="seniors-header">
        <h1 className="seniors-welcome">Welcome, Golden Minds!</h1>
      </header>

      {/* Back Button */}
      {selectedCategory || selectedTopic || selectedVideo ? (
        <button className="back-btn" onClick={handleBack}>← Back</button>
      ) : null}

      {/* Step 1: Show Categories */}
      {!selectedCategory && (
        <>
          <h2 className="seniors-stream-heading">Streaming Highlights</h2>
          <div className="seniors-stream-grid">
            {Object.keys(seniorsData).map((cat) => (
              <div
                key={cat}
                className="seniors-stream-bar"
                onClick={() => setSelectedCategory(cat)}
              >
                <img
                  src={seniorsData[cat].image}
                  alt={cat}
                  className="seniors-stream-image"
                />
                <div className="seniors-stream-footer">{cat}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 2: Show Topics */}
      {selectedCategory && !selectedTopic && (
        <div className="seniors-stream-grid">
          {Object.keys(seniorsData[selectedCategory].topics).map((topic) => (
            <div
              key={topic}
              className="seniors-stream-bar"
              onClick={() => setSelectedTopic(topic)}
            >
              <h3>{topic}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Step 3: Show Videos under Topic */}
      {selectedTopic && !selectedVideo && (
        <div className="videos-container">
          {seniorsData[selectedCategory].topics[selectedTopic].map((video) => (
            <div className="video-card" key={video.title}>
              <img src={video.image} alt={video.title} className="video-thumbnail" />
              <h3>{video.title}</h3>
              <button className="watch-btn" onClick={() => setSelectedVideo(video.title)}>
                ▶ Watch Now
              </button>
              <button className="watch-btn">
                <FaDownload /> Download
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Step 4: Video Player */}
      {selectedVideo && (
        <div className="video-player-wrapper">
          <h2>{selectedVideo}</h2>
          <VideoPlayer
            src={`/videos/${selectedCategory}/${selectedTopic}/${selectedVideo}.mp4`}
            poster="/thumbnail.jpg"
          />
        </div>
      )}
    </section>
  );
}
