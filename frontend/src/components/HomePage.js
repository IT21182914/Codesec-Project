// HomePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
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
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
