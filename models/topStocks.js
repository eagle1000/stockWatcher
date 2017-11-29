const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topStockSchema = new Schema({

	topStocks: [
    	{ type: String }
    ]

	});

const TopStocks = mongoose.model("TopStocks", topStockSchema);

module.exports = TopStocks;