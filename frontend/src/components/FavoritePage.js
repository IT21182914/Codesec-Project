// FavoritePage.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const FavoritePage = () => {
  const location = useLocation();
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Cook</div>
        <div className="nav-links">
          <Link
            to="/home"
            style={{
              color: location.pathname === "/home" ? "#ff5894" : "black",
            }}
          >
            HOME
          </Link>
          <Link
            to="/favorite"
            style={{
              color: location.pathname === "/favorite" ? "#ff5894" : "black",
            }}
          >
            FAVORITE
          </Link>
        </div>
      </div>
      <h2>Favorite Recipes HERE</h2>
      {/* Display favorite recipes here */}
    </div>
  );
};

export default FavoritePage;
