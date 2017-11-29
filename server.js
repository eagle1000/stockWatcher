const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./Routes');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stocks",
  {
    useMongoClient: true
  }
);
// Require Database models
const db = require("./models")
const {TopStocks} = db

// Routes

app.post("/seed", (req, res) => {
	var topStocks = ["AAPL", "IBM", "FB", "TSLA", "GOOGL", "MSFT", "NFLX", "AMZN", "GE", "DIS", "WMT", "TGT", "BAC", "GS", "XOM", "MCD", "TWTR", "MDB", "BABA", "WYNN", "SHOP", "EBAY", "NVDA", "PYPL", "SQ"];
	var convertTicker = t => { return {ticker: t}}
	var tickers = topStocks.map(convertTicker)
	var imDone = () => res.json(true)
	TopStocks.insertMany(tickers).then(imDone)

	
	

})

// app.get("/api/saved", (req, res) => {
// 	Favorite.find({}).then(favorite => res.json(favorite))

// })

// app.delete("/api/saved", (req, res) => {
//   Favorite.remove(req.body)
//   .then(favorite =>
//   	res.json(favorite))
//   })

// Send every request to the React app
// Define any API routes before this runs
//  

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
