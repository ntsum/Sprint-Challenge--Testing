const router = require("express").Router();

const games = require("./gamesModel.js");

router.get("/", async (req, res) => {
  try {
    const disk = await games.getAll();
    res.status(200).json(disk);
  } catch (err) {
    res.status(500).json({ error: "No game for you" });
  }
});

router.post("/", async (req, res) => {
  try {
    const game = await games.insert(req.body);
    res.status(201).json(game);
  } catch (err) {
    res.status(422).json({ error: "Game data is incomplete.." });
  }
});

module.exports = router;
