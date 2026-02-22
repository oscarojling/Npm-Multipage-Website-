import express from "express";
import * as path from "path";
import { games } from "../data/data.js";

const gamesRouter = express.Router();
const __dirname = path.resolve();

gamesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/games"), {
    pageTitle: "Games",
    pageType: "games",
    games: games,
  });
});

gamesRouter.get("/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (!game) return res.status(404).send("Game not found");
  res.render(path.join(__dirname, "views/pages/games"), {
    pageTitle: game.name,
    pageType: game.id,
    game: game
  });
});

export default gamesRouter;
