// RecipeCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const RecipeCard = ({ recipe }) => {
  const addToFavorites = () => {
    // Logic to add recipe to favorites
  };

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-details">
        <h3>{recipe.strMeal}</h3>
        <button onClick={addToFavorites} className="favorite-btn">
          Favorite
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
