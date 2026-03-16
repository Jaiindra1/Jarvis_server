const express = require("express")
const cors = require("cors")
const { initDB } = require("./database")

const app = express()

app.use(cors())
app.use(express.json())

initDB().then(() => {
    console.log("Database initialized")
})

app.get("/", (req, res) => {
    res.send("Jarvis backend running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})