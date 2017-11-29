const router = require("express").Router();
const userController = require("../../controllers/userController");
const topStockController = require("../../controllers/topStockController");

// Matches with "/api/stocks"
router.route("/")
  .get(topStockController.findTopStocks)
  .post(userController.create)

// Matches with "/api/stocks/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;