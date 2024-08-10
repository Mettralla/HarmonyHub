import "../styles/MusicPlayer.css"; 
import PlayContext from "../context/PlayContext";
import { useContext, useEffect, useState, useRef } from "react";
// import axios from "axios";
import CoverDefault from "../assets/cover-default.png";

function MusicPlayer() {
  const { play, togglePlay, id, title, songFile, year, cover } = useContext(PlayContext);
  // const [song, setSong] = useState([]);
  const [volume, setVolume] = useState(0.5); 
  const [currentTime, setCurrentTime] = useState(0); 
  const [duration, setDuration] = useState(0); 
  const audioRef = useRef(null); 

  // useEffect(() => {
  //   if (id !== null) {
  //     const fetchSong = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://sandbox.academiadevelopers.com/harmonyhub/songs/${id}`
  //         );
  //         setSong(response.data);
  //       } catch (error) {
  //         console.error("Error recuperando canciones: ", error);
  //       }
  //     };

  //     fetchSong();
  //   }
  // }, [id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; 
      play ? audioRef.current.play() : audioRef.current.pause(); 
    }
  }, [play, volume]); 

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (id) {
    return (
      <div className={`music-player ${play ? "is-playing" : ""}`}>
        <div className="player-content">
          <div className="cover">
            <img src={!cover ? CoverDefault : cover} alt="Cover" />
          </div>
          <div className="info">
            <p className="track-name">{title}</p>
            <p className="artist-name">{year}</p>
          </div>
          <div className="controls">
            {/* Control de volumen */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              />

            {songFile && (
              <div className="control-group">
                <div className="control">
                  <audio
                    ref={audioRef}
                    src={songFile}
                    onTimeUpdate={handleTimeUpdate}
                    />
                </div>

                <div className="progress-bar">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    className="progress-slider"
                    onChange={(e) => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = e.target.value;
                      }
                    }}
                    />
                  <div className="time-info">
                    <span className="current-time">
                      {formatTime(currentTime)}
                    </span>{" "}
                    /<span className="duration-time">{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="control">
            <button className="play-btn" onClick={togglePlay}>
              {play ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
  
export default MusicPlayer;
