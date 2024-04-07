// RecipeCard.js
import React from "react";
import FavoriteButton from "./FavoriteButton";
import "./styles.css";

const RecipeCard = ({
  recipe,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-details">
        <h3>{recipe.strMeal}</h3>
        <FavoriteButton
          onClick={
            isFavorite
              ? () => removeFromFavorites(recipe)
              : () => addToFavorites(recipe)
          }
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
