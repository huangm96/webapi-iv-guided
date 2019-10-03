const express = require("express");

const Shoutouts = require("../data/shoutouts-model");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  Shoutouts.find()
    .then(shoutouts => {
      res.status(200).json(shoutouts);
    })
    .catch(error => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot retrieve the shoutouts" });
    });
});

router.post("/", (req, res) => {
  Shoutouts.add(req.body)
    .then(shoutout => {
      res.status(201).json(shoutout);
    })
    .catch(error => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot add the shoutout" });
    });
});

module.exports = router;