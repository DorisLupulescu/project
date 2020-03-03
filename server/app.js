var express = require("express");
var app = express();

var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");

var mongodb = "mongodb://localhost:27017/Pets";

var db = mongoose.connection;
var corOptions = {
  origin: "http://localhost:4200"
};

app.use(bodyParser.json());
app.use(cors(corOptions));
db.on("error", console.error.bind(console, "Mongodb Connection Error: "));

var catRoutes = require("./api/cats/router");
var toyRoutes = require("./api/toys/router");
var dogRoutes = require("./api/dogs/router");

mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connected => {
    app.use("/cats", catRoutes);
    app.use("/toys", toyRoutes);
    app.use("/dogs", dogRoutes);

    app.get("/", (req, res) => res.redirect("/cats"));

    app.use((req, res) => {
      res.status(404).end();
    });

    app.listen(3000, function() {
      console.log("listening to port 3000");
    });
  })
  .catch(err => {
    console.log(err);
  });
