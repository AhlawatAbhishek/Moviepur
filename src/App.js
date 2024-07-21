import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const toggleWatchlist = (movie) => {
    // Function to toggle the watchlist
    if (watchlist.includes(movie)) {
      setWatchlist(watchlist.filter((m) => m !== movie));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        {/* BrowserRouter will also work instead of Router Tag */}
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
