import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Body from "./components/WebBody.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchBar />
      <Body />
    </Router>
  );
}

export default App
