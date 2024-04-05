const Recipe = require("../models/Recipe");

const getAllRecipes = async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addToFavorites = async (req, res) => {
  // Logic to add recipe to user's favorites
};

const removeFromFavorites = async (req, res) => {
  // Logic to remove recipe from user's favorites
};

module.exports = { getAllRecipes, addToFavorites, removeFromFavorites };
