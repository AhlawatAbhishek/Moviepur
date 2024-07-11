import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const m = ["a", "b", "c"];
    setMovies(m);
  }, []);
  return <div>{movies.length}</div>;
}
