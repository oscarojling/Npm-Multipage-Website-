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

gamesRouter.get("/:slug", (req, res) => {
  const game = games.find((g) => g.slug === req.params.slug);
  if (!game) return res.status(404).send("Game not found");
  res.render(path.join(__dirname, "views/pages/games"), {
    pageTitle: game.name,
    pageType: game.slug,
    game: game,
  });
});

export default gamesRouter;
