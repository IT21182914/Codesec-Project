const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all recipes
router.get("/recipes", recipeController.getAllRecipes);

// Add recipe to favorites
router.post(
  "/recipes/favorite",
  authMiddleware,
  recipeController.addToFavorites
);

// Remove recipe from favorites
router.delete(
  "/recipes/favorite/:recipeId",
  authMiddleware,
  recipeController.removeFromFavorites
);

module.exports = router;
