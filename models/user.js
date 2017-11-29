const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userPassword: { type: String, required: true },
  stocks: [{ type: String }],
  brokerURL: { type: String},
  articles: [ {type: String }],
  wishList: [ { type: String }] 
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;