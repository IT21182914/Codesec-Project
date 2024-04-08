import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link, useLocation } from "react-router-dom";

const FavoritePage = () => {
  const location = useLocation();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Fetch favorite recipes from the backend
    axios
      .get("http://localhost:8080/api/recipes")
      .then((response) => {
        setFavoriteRecipes(response.data.recipes || []);
      })
      .catch((error) => {
        console.error("Error fetching favorite recipes:", error);
      });
  }, []);

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
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#ff5894",
          textTransform: "uppercase",
          letterSpacing: "1px",
          margin: "20px 0",
        }}
      >
        Favorite Recipes HERE
      </h2>

      <div className="recipes">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
