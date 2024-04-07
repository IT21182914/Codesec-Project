import React from "react";
import { Link, useLocation } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const FavoritePage = ({ favoriteRecipes }) => {
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
      <div className="recipes">
        {favoriteRecipes?.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
