var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var catToys = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "cat" }
});

var catToys = mongoose.model("catToys", catToys);

module.exports = catToys;
