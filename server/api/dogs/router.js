var express = require("express");
var router = express.Router();

var logic = require("./logic");

router.get("", (req, res) =>
  logic
    .findBy({})
    .then(response => {
      res
        .json("There are " + response + " the dogs matching your search")
        .status(200);
    })
    .catch(err => res.send(err).status(400))
);

router.post("/", (req, res) => {
  logic
    .createNew(req.body)
    .then(response => {
      res.send("Created " + response).status(200);
    })
    .catch(err => res.send(err).status(400));
});
module.exports = router;
