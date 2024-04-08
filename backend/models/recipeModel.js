const mongoose = require("mongoose");

// Define schema for recipe
const recipeSchema = new mongoose.Schema({
  strMeal: String,
  strCategory: String,
  strMealThumb: String,
  strInstructions: String,
});

// Define model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
  Recipe,
};
