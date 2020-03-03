var express = require("express");
var router = express.Router();

var logic = require("./logic");

router.get("/", (req, res) =>
  logic
    .get()
    .then(response => res.json(response).status(200))
    .catch(error => res.send(error).status(400))
);

router.get("/:ID", (req, res) => {
  logic
    .findById(req.params.ID)
    .then(response => res.send(response).status(200))
    .catch(error => res.send(error).status(400));
});

router.post("/", (req, res) =>
  logic
    .createNew(req.body)
    .then(response => res.json({ message: "created " + response }))
);

router.post("/:CAT_ID/toys/:TOY_ID", (req, res) =>
  logic
    .addToy(req.params.CAT_ID, req.params.TOY_ID)
    .then(response =>
      res.send(response + " has been added as a toy").status(200)
    )
    .catch(err => res.send(err).status(400))
);

router.get("/display", (req, res) =>
  logic
    .findBy({})
    .then(response => {
      res
        .json({ message: "Here are the cats from the db " + response })
        .status(200);
    })
    .catch(err => res.send(err).status(400))
);

router.get("/count", (req, res) =>
  logic
    .countBy({})
    .then(response =>
      res
        .send("there are " + response + " cats matching your search")
        .status(200)
    )
    .catch(err => res.send(err).status(400))
);

router.put("/:ID", (req, res) =>
  logic
    .updateAll(req.params.ID, req.body)
    .then(response =>
      res
        .json({
          message:
            "Field with id " + req.params.ID + " has been updated: " + response
        })
        .status(200)
    )
    .catch(err => res.send(err).status(400))
);

router.patch("/:ID", (req, res) => {
  logic
    .updateOne(req.params.ID, req.body)
    .then(response =>
      res
        .send(
          "Field with id " + req.params.ID + " has been updated: " + response
        )
        .status(200)
    )
    .catch(err => res.send(err).status(400));
});

router.delete("/:ID", (req, res) => {
  logic
    .deleteOne(req.params.ID)
    .then(response =>
      res
        .json({
          message: "Field with id " + req.params.ID + " has been deleted "
        })
        .status(200)
    )
    .catch(err => res.send(err).status(400));
});

router.get("/:ID/toys", (req, res) => {
  logic
    .showToys(req.params.ID)
    .then(response =>
      res
        .send("Cat with id " + req.params.ID + " has these toys " + response)
        .status(200)
    )
    .catch(err => res.send(err).status(400));
});

module.exports = router;
