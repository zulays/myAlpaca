const express = require("express")
const PORT = process.env.PORT || 3000
const bodyParser = require("body-parser")
const cors = require("cors")
const logger = require("morgan")
const usersRoutes = require("./routes/users")
const db = require("./db/connection")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger("dev"))

app.use("/", usersRoutes)

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))