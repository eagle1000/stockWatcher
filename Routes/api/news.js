const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .put(userController.update)
  


module.exports = router;