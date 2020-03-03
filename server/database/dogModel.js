var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dogSchema = new Schema({
  name: String,
  color: String
});

var dog = mongoose.model("dog", dogSchema);

module.exports = dog;
