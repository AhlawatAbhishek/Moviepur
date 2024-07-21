import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };

  const getRatingColor = (rating) => {
    if (rating >= 8.0) {
      return "rating-good";
    } else if (rating >= 5.0 && rating < 8.0) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingColor(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}
