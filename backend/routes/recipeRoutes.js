const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middlewares/authMiddleware");

// Apply authMiddleware to protect the routes below
router.use(authMiddleware);

// Get all recipes
router.get("/recipes", recipeController.getAllRecipes);

// Add a new recipe
router.post("/recipes", recipeController.addRecipe);

// Add recipe to favorites
router.post("/recipes/favorite", recipeController.addToFavorites);

// Remove recipe from favorites
router.delete(
  "/recipes/favorite/:recipeId",
  recipeController.removeFromFavorites
);

module.exports = router;
