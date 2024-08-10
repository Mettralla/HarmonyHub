import { createContext } from "react";

const PlayContext = createContext({
  play: false,
  id: null,
  title: null,
  song_file: null,
  year: null,
  cover: null,
});

export default PlayContext;
