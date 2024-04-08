import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link, useLocation } from "react-router-dom";
import logoutIcon from "../assets/logout.png";
import "./HomePage.css"; // Import CSS file for HomePage styling

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        )
        .then((response) => {
          setRecipes(response.data.meals);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const addToFavorites = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
    // Send the recipe data to the backend
    axios
      .post("https://codesec-project.onrender.com/api/recipes", recipe)
      .then((response) => {
        console.log("Recipe added to the database:", response.data);
        setSuccessMessage("Recipe added to favorites!"); // Set success message
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        console.error("Error adding recipe to the database:", error);
      });
  };

  const removeFromFavorites = (recipe) => {
    setFavoriteRecipes(
      favoriteRecipes.filter((favRecipe) => favRecipe.idMeal !== recipe.idMeal)
    );
  };

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
        <div
          className="logout-button-container"
          style={{ marginRight: "10px" }}
        >
          <Link
            to="/"
            className="logout-button"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logoutIcon}
              alt="Logout"
              style={{ width: "25px", marginRight: "5px" }}
            />
            <span style={{ fontSize: "18px" }}></span>
          </Link>
        </div>
      </div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.strCategory}
            className={
              selectedCategory === category.strCategory ? "active" : ""
            }
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
      <div className="recipes">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={favoriteRecipes.some(
                (favRecipe) => favRecipe.idMeal === recipe.idMeal
              )}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
