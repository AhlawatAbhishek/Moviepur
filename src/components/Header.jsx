import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="../logo.png"
        alt="moviepur"
        width={50}
        height={200}
      />
      <h1 className="app-subtitle">
        It's time for popcorn! Find your next movie here
      </h1>
    </div>
  );
}
