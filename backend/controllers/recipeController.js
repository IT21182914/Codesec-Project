const Recipe = require("../models/recipeModel");

// Function to get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { name, category, ingredients, instructions, imageUrl } = req.body;
    const newRecipe = new Recipe({
      name,
      category,
      ingredients,
      instructions,
      imageUrl,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to add a recipe to favorites
const addToFavorites = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const userId = req.user.userId;

    // Find the user by ID and update their favorites list
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favorites: recipeId } }, // Using $addToSet to avoid duplicates
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Recipe added to favorites successfully" });
  } catch (error) {
    console.error("Error adding recipe to favorites:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to remove a recipe from favorites
const removeFromFavorites = async (req, res) => {
  try {
    const { recipeId } = req.params;
    // Get user ID from req.user (assuming user is authenticated)
    const userId = req.user.id;
    // Remove recipe ID from user's favorites list in the database
    // Example logic: const user = await User.findById(userId);
    // user.favorites.pull(recipeId);
    // await user.save();
    res
      .status(200)
      .json({ message: "Recipe removed from favorites successfully" });
  } catch (error) {
    console.error("Error removing recipe from favorites:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllRecipes,
  addRecipe,
  addToFavorites,
  removeFromFavorites,
};
