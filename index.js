import express from "express"
import * as path from "path"
import gamesRouter from "./routes/game-route.js"
import racesRouter from "./routes/races-route.js"
import 'dotenv/config'

const app = express()
const port = process.env.PORT;
const __dirname = path.resolve()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/index"))
})

app.use("/games", gamesRouter)
app.use("/races", racesRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))