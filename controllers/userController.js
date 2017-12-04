// Require Database models
const db = require("../models")


// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.UserData
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findStocks: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.stocks))
      .catch(err => res.status(422).json(err));
  },

    findSavedNews: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.articles))
      .catch(err => res.status(422).json(err));
  },

    findAllNews: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.stocks))
      .catch(err => res.status(422).json(err));
  },


    findByWish: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.wishList))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.UserData
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.UserData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.UserData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    insertStock: function(req, res) {
      console.log(req.body)
    db.UserData
      .findOneAndUpdate({"_id": req.params.id }, 
      { $push: { "stocks": req.body.stock } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

  insertNews: function(req, res) {
      console.log(req.body)
    db.UserData
      .findOneAndUpdate({"_id": req.params.id }, 
      { $push: { "articles": req.body.article } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

insertWish: function(req, res) {
      console.log(req.body)
    db.UserData
      .findOneAndUpdate({"_id": req.params.id }, 
      { $push: { "wishList": req.body.wish } } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}

}

