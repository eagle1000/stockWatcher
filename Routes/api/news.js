const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/news/:id"
router
	.route("/")
	.get(userController.findAllNews)




module.exports = router;