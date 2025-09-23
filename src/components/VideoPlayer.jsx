import React, { useRef, useState } from "react";
import "../styles/VideoPlayer.css";
import { FaPlay, FaPause, FaVolumeUp, FaExpand } from "react-icons/fa";

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  // Toggle play/pause
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  // Seek video
  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Volume control
  const handleVolume = (e) => {
    const vol = e.target.value;
    videoRef.current.volume = vol;
    setVolume(vol);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="controls">
        <button onClick={handlePlayPause} className="control-btn">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
        />

        <div className="volume-control">
          <FaVolumeUp />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolume}
          />
        </div>

        <button onClick={handleFullscreen} className="control-btn">
          <FaExpand />
        </button>
      </div>
    </div>
  );
}
