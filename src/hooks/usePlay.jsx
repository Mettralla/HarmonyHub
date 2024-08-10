import { useState } from "react";

function usePlay() {
  const [play, setPlay] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [year, setYear] = useState(null);
  const [cover, setCover] = useState(null);

  const togglePlay = () => {
      setPlay(play === false ? true : false);
  };

  const setTrackId = (newId) => {
    setId(newId);
  };

  const setTrackTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const setTrackSongFile = (newSongFile) => {
    setSongFile(newSongFile);
  };

  const setTrackYear = (newYear) => {
    setYear(newYear);
  };

  const setTrackCover = (newCover) => {
    setCover(newCover);
  };

  return [
    play,
    togglePlay,
    id,
    setTrackId,
    title,
    setTrackTitle,
    songFile,
    setTrackSongFile,
    year,
    setTrackYear,
    cover,
    setTrackCover
  ];
}

export default usePlay;