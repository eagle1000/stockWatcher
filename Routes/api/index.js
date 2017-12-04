const router = require("express").Router();
const stockRoutes = require("./stocks");
const wishRoutes = require("./wishlist");
const newsRoutes = require("./news");
const profCreateRoutes = require("./profCreate");
// Stock routes
router.use("/stocks", stockRoutes);
router.use("/wishlist", wishRoutes);
router.use("/news", newsRoutes);
router.use("/profCreate", profCreateRoutes);
module.exports = router;