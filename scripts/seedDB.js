const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stocks",
  {
    useMongoClient: true
  }
);

const stockSeed = {
	topStocks: ["AAPL", "IBM", "FB", "TSLA", "GOOGL", "MSFT", "NFLX", "AMZN", "GE", "DIS", "WMT", "TGT", "BAC", "GS", "XOM", "MCD", "TWTR", "MDB", "BABA", "WYNN", "SHOP", "EBAY", "NVDA", "PYPL", "SQ"]
};


db.TopStocks
  .remove({})
  .then(() => db.TopStocks.collection.insert(stockSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });