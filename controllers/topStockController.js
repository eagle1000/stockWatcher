// Require Database models
const db = require("../models")


// Defining methods for the booksController
module.exports = {
 

  findTopStocks: function(req, res) {
    db.TopStocks
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
};
