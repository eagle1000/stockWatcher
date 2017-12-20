const router = require("express").Router();
const userController = require("../../controllers/userController");
const topStockController = require("../../controllers/topStockController");

// Matches with "/api/stocks"
router.route("/")
  .get(topStockController.findTopStocks)
  
// .post(topStockController.create);  
// this route was used to seed the production database


// Matches with "/api/stocks/:id"

router
	.route("/:id")
	.get(userController.findStocks)
	.put(userController.insertStock)
	.delete(userController.removeStock) 

module.exports = router;