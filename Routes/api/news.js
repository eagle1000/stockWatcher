const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/news"
router
	.route("/")
	.get(userController.findAllNews)




module.exports = router;