const express = require("express")
const cors = require("cors")

const transactionRoutes = require("./routes/transactions")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("MyJarvis backend running")
})

app.use("/transactions", transactionRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})