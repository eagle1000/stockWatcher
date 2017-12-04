const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/news/:id"
router
	.route("/")
	.get(userController.findAllNews)

router
  .route("/:id")
  .get(userController.findSavedNews)
  .put(userController.insertNews)
  


module.exports = router;