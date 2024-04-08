const { Recipe } = require("../models/recipeModel");

// Controller to fetch recipes
const fetchRecipes = async (req, res) => {
  try {
    // Fetch recipes from the database
    const recipes = await Recipe.find();
    res.json({ success: true, recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to create a new recipe
const createRecipe = async (req, res) => {
  try {
    // Extract recipe data from request body
    const { strMeal, strCategory, strMealThumb, strInstructions } = req.body;
    // Create a new recipe instance
    const newRecipe = new Recipe({
      strMeal,
      strCategory,
      strMealThumb,
      strInstructions,
    });
    // Save the new recipe to the database
    const savedRecipe = await newRecipe.save();
    res.status(201).json({ success: true, recipe: savedRecipe });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  fetchRecipes,
  createRecipe,
};
