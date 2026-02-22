import express from "express";
import * as path from "path";
import { races } from "../data/data.js";

const racesRouter = express.Router();
const __dirname = path.resolve();

racesRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/races"), {
    pageTitle: "Races",
    pageType: "races",
    races: races,
  });
});

racesRouter.get("/:id", (req, res) => {
  const race = races.find((r) => r.id === req.params.id);
  if (!race) return res.status(404).send("Race not found");
  res.render(path.join(__dirname, "views/pages/races"), {
    pageTitle: race.name,
    pageType: race.id,
    race: race
  });
});

export default racesRouter;
