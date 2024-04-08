const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Route to fetch all recipes
router.get("/recipes", recipeController.fetchRecipes);

// Route to create a new recipe
router.post("/recipes", recipeController.createRecipe);

router.get("/favorite-recipes", recipeController.fetchFavoriteRecipes);

module.exports = router;
