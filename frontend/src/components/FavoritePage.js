// FavoritePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const FavoritePage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Cook</div>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/favorite">FAVORITE</Link>
        </div>
      </div>
      <h2>Favorite Recipes</h2>
      {/* Display favorite recipes here */}
    </div>
  );
};

export default FavoritePage;
