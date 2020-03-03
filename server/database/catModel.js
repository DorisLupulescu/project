var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var somecatSchema = new Schema({
  name: String,
  birtdate: Date,
  weight: Number,
  color: String,
  toys: [{ type: Schema.Types.ObjectId, ref: "catToys" }]
});

var cat = mongoose.model("cat", somecatSchema);

module.exports = cat;
