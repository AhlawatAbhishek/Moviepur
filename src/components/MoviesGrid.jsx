import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const filteredMovies = movies
    .filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((movie) => {
      return (
        genre === "All Genres" ||
        movie.genre.toLowerCase().includes(genre.toLowerCase())
      );
    })
    .filter((movie) => {
      var ratingString = "All";
      if (movie.rating >= 8.0) {
        ratingString = "Good";
      } else if (movie.rating >= 5.0 && movie.rating < 8.0) {
        ratingString = "Ok";
      } else {
        ratingString = "Bad";
      }
      return rating === "All" || ratingString === rating;
    });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div
          className="filter-slot"
          value={genre}
          onChange={handleRatingChange}
        >
          <label>Rating</label>
          <select className="filter-dropdown">
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
