import React, { useEffect, useState } from "react";
import "../styles/Entertainment.css";
import VideoPlayer from "./VideoPlayer";

export default function Entertainment() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setError("");
        const res = await fetch("/api/videos");
        const text = await res.text();
        const data = (() => { try { return JSON.parse(text); } catch { return null; } })();
        if (!res.ok || !Array.isArray(data)) {
          setError("Failed to load videos");
          return;
        }
        if (!cancelled) setVideos(data);
      } catch (_) {
        setError("Network error loading videos");
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="entertainment-section">
      <h1>Entertainment</h1>
      {error && <div className="error">{error}</div>}
      <div className="video-grid">
        {videos.map((v) => (
          <div key={v.id} className="video-card">
            <h3>{v.title}</h3>
            <p>{v.description}</p>
            <button onClick={() => setPlayingId(v.id)}>Play</button>
          </div>
        ))}
      </div>
      {playingId && (
        <div className="video-player-wrapper">
          <VideoPlayer src={`/api/videos/${playingId}/stream`} />
          <button onClick={() => setPlayingId(null)}>Close</button>
        </div>
      )}
    </section>
  );
}
