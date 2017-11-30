// Require Database models
const db = require("../models")


// Defining methods for the topStocksController
module.exports = {
 

  findTopStocks: function(req, res) {
    db.TopStocks
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  

  create: function(req, res) {
  	var topStocks = ["AAPL", "IBM", "FB", "TSLA", "GOOGL", "MSFT", "NFLX", "AMZN", "GE", "DIS", "WMT", "TGT", "BAC", "GS", "XOM", "MCD", "TWTR", "MDB", "BABA", "WYNN", "SHOP", "EBAY", "NVDA", "PYPL", "SQ"];
	var convertTicker = t => { return {ticker: t}}
	var tickers = topStocks.map(convertTicker)
    db.TopStocks
      .remove({})
      .then(() => db.TopStocks.collection.insertMany(tickers))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



