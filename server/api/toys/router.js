var express = require("express");
var router = express.Router();

var logic = require("./logic");

router.get("/display", (req, res) => {
  logic
    .findBy({})
    .then(response => {
      res.json(response).status(200);
    })
    .catch(err => res.send(err).status(400));
});

router.get("/count", (req, res) => {
  logic
    .countBy({})
    .then(response => {
      res
        .send("There are " + response + " toys matching your search")
        .status(200);
    })
    .catch(err => res.send(err).status(400));
});

router.post("/", (req, res) => {
  logic
    .create(req.body)
    .then(response => {
      res.send("Created " + response).status(200);
    })
    .catch(err => res.send(err).status(400));
});

router.post("/owner/:ID", (req, res) => {
  logic
    .addOwner("5e500647330e414290f7e5b4", req.params.ID)
    .then(response => {
      res.send("Created " + response).status(200);
    })
    .catch(err => res.send(err).status(400));
});

module.exports = router;
