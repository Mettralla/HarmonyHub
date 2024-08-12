import { useState } from "react";

/**
 * Hook personalizado para manejar el estado de reproducción de una canción.
 * Incluye estado para controlar la reproducción, la información de la canción
 * y funciones para actualizar este estado.
 * 
 * @returns {Array} 
 */
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