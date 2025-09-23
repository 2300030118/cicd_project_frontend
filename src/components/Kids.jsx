// KidsModule.jsx
import React, { useState } from "react";
import "../styles/Kids.css";
import { FaDownload } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

// Kids data (same as yours)
const kidsData = {
  cartoons: {
    "Chhota Bheem": { image: "/images/chota_bheem.gif", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"] },
    "Roll no:21": { image: "/images/roll_no_21.jpg", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"] },
    "Doraemon": { image: "/images/doraemon.gif", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"] },
    "Mickey Mouse": { image: "/images/mickey_mouse.gif", episodes: ["Episode 1", "Episode 2", "Episode 3"] },
    "Pokemon": { image: "/images/pokemon_1.gif", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4", "Episode 5"] },
    "SpongeBob": { image: "/images/sponge_bob.gif", episodes: ["Episode 1", "Episode 2", "Episode 3"] },
    "Peppa Pig": { image: "/images/peppa_pig.gif", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"] },
    "Paw Patrol": { image: "/images/paw-patrol.jpg", episodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"] },
    "Dora the Explorer": { image: "/images/dora_the_explorer.gif", episodes: ["Episode 1", "Episode 2", "Episode 3"] },
    
    
  },
  stories: {
    "Fairy Tales": { image: "/images/fairy_tales.gif", episodes: ["Cinderella", "Snow White", "Sleeping Beauty", "Hansel & Gretel"] },
    "Folk Tales": { image: "/images/folk_tale.gif", episodes: ["The Tortoise and the Hare", "The Lion and the Mouse", "The Boy Who Cried Wolf"] },
    "Adventure Stories": { image: "/images/adventure_stories.gif", episodes: ["Treasure Island", "Around the World in 80 Days", "Gulliver's Travels"] },
    "Mythological Tales": { image: "/images/mythology.webp", episodes: ["Ramayana Stories", "Mahabharata Stories", "Krishna Leela"] }
  },
  rhymes: {
    "Lullabies": { image: "/images/lullabies.gif", episodes: ["Twinkle Twinkle Little Star", "Brahms Lullaby", "Rock-a-bye Baby"] },
    "Fun Rhymes": { image: "/images/fun_rhymes.gif", episodes: ["Five Little Monkeys", "Itsy Bitsy Spider", "Humpty Dumpty", "Jack and Jill"] },
    "Learning Rhymes": { image: "/images/learning_rhymes.gif", episodes: ["ABC Song", "Counting 1 to 10", "Days of the Week"] },
    "Seasonal Rhymes": { image: "/images/seasonal_rhymes.gif", episodes: ["Rainy Day Rhyme", "Summer Fun Rhyme", "Winter Snow Rhyme"] }
  },
  songs: {
    "Sing Along": { image: "/images/sing_along.gif", episodes: ["Old MacDonald Had a Farm", "If You're Happy", "The Wheels on the Bus", "Head, Shoulders, Knees & Toes"] },
    "Learning Songs": { image: "/images/learning-songs.webp", episodes: ["Alphabet Song", "Counting Song", "Colors Song", "Shapes Song"] },
    "Festival Songs": { image: "/images/festival-songs.gif", episodes: ["Christmas Carol", "Diwali Song", "Eid Song", "New Year Song"] },
    "Action Songs": { image: "/images/action-song.gif", episodes: ["Hokey Pokey", "Shake Your Sillies Out", "Skip to My Lou"] }
  }
};

export default function KidsModule() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleBack = () => {
    if (selectedEpisode) setSelectedEpisode(null);
    else if (selectedShow) setSelectedShow(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  const categoryList = [
    { title: "Cartoons", type: "cartoons", icon: "🎬" },
    { title: "Story Time", type: "stories", icon: "📖" },
    { title: "Bedtime Rhymes", type: "rhymes", icon: "🎵" },
    { title: "Children Songs", type: "songs", icon: "🎤" }
  ];

  return (
    <section className="kids-section">
      <div className="cloud small"></div>
      <div className="cloud medium"></div>
      <div className="cloud large"></div>

      <div className="balloon one"></div>
      <div className="balloon two"></div>
      <div className="balloon three"></div>

      {selectedCategory || selectedShow || selectedEpisode ? (
        <button className="back-btn" onClick={handleBack}>← Back</button>
      ) : null}

      {!selectedCategory && (
        <>
          <h1 className="kids-title">✨ Fun World for Kids ✨</h1>
          <p className="kids-sub">Cartoons, Stories, Rhymes & Songs</p>
          <div className="kids-grid">
            {categoryList.map((cat) => (
              <div key={cat.type} className="kids-card" onClick={() => setSelectedCategory(cat.type)}>
                <div className="kids-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedCategory && !selectedShow && (
        <div className="kids-grid">
          {Object.keys(kidsData[selectedCategory]).map((show) => (
            <div key={show} className="kids-card" onClick={() => setSelectedShow(show)}>
              <img
                src={kidsData[selectedCategory][show].image}
                alt={show}
                className="kids-img"
                style={{ width: "200px", height: "auto" }} // Auto resize
              />
              <h3>{show}</h3>
            </div>
          ))}
        </div>
      )}

      {selectedShow && !selectedEpisode && (
        <div className="videos-container">
          {kidsData[selectedCategory][selectedShow].episodes.map((ep) => (
            <div className="video-card" key={ep}>
              <h3>{ep}</h3>
              <button className="watch-btn" onClick={() => setSelectedEpisode(ep)}>▶ Watch Now</button>
              <button className="watch-btn"><FaDownload /> Download</button>
            </div>
          ))}
        </div>
      )}

      {selectedEpisode && (
        <div className="video-player-wrapper">
          <h2>{selectedEpisode}</h2>
          <VideoPlayer
            src={`/videos/${selectedCategory}/${selectedShow}/${selectedEpisode}.mp4`}
            poster="/thumbnail.jpg"
          />
        </div>
      )}
    </section>
  );
}
