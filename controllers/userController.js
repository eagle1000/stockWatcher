// Require Database models
const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.UserData.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.UserData.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findStocks: function(req, res) {
    db.UserData.findById(req.params.id)
      .then(dbModel => res.json(dbModel.stocks))
      .catch(err => res.status(422).json(err));
  },

  findSavedNews: function(req, res) {
    db.UserData.findById(req.params.id)
      .then(dbModel => res.json(dbModel.articles))
      .catch(err => res.status(422).json(err));
  },

  findAllNews: function(req, resp) {
    // This function will scrape the NYTimes website
    // Scrape the NYTimes website
    axios.get("https://www.reddit.com/r/stockmarket").then(function(res) {
      var $ = cheerio.load(res.data);
      // Make an empty array to save our article info
      var articles = [];

      // Now, find and loop through each element that has the "theme-summary" class
      // (i.e, the section holding the articles)
      $(".title").each(function(i, element) {
        // In each .theme-summary, we grab the child with the class story-heading

        // Then we grab the inner text of the this element and store it
        // to the head variable. This is the article headline
        var head = $(this)
          .children("a")
          .text()
          .trim();

        // Grab the URL of the article
        var url = $(this)
          .children("a")
          .attr("href");

        // Then we grab any children with the class of summary and then grab it's inner text
        // We store this to the sum variable. This is the article summary
        var sum = $(this)
          .text()
          .trim();

        // So long as our headline and sum and url aren't empty or undefined, do the following
        if (head && sum && url) {
          // This section uses regular expressions and the trim function to tidy our headlines and summaries
          // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
          var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

          // Initialize an object we will push to the articles array

          var dataToAdd = {
            headline: headNeat,
            summary: sumNeat,
            url: url
          };

          articles.push(dataToAdd);
        }
      });
      resp.json(articles);
    });
    // db.UserData
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel.stocks))
    //   .catch(err => res.status(422).json(err));
  },

  findByWish: function(req, res) {
    db.UserData.findById(req.params.id)
      .then(dbModel => res.json(dbModel.wishList))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.UserData.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.UserData.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeStock: function(req, res) {
    console.log('we hit the api route')
    console.log('this is req.body', req.body)
    console.log('this is req.params', req.params.id)
    db.UserData.findOneAndUpdate(
      { _id: req.params.id }, 
      {$pull: { stocks: req.body.stocks }}
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // db.places.remove({"country":"Morocco"})

  insertStock: function(req, res) {
    console.log(req.body);
    db.UserData.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { stocks: req.body.stocks } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  insertNews: function(req, res) {
    console.log(req.body);
    db.UserData.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { articles: req.body.article } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  insertWish: function(req, res) {
    console.log(req.body);
    db.UserData.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { wishList: req.body.wish } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
