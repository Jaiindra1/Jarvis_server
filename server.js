const express = require("express")
const cors = require("cors")
const { initDB, insertTransaction, getTransactions } = require("./database")

const app = express()

app.use(cors())
app.use(express.json())

initDB().then(() => {
    console.log("Database initialized")
})

app.get("/", (req, res) => {
    res.send("Jarvis backend running")
})

/* ADD TRANSACTION */
app.post("/transactions/add", (req, res) => {

    const {
        source,
        amount,
        type,
        reference,
        merchant,
        category,
        bank,
        app: appName,
        timestamp
    } = req.body

    const transaction = {
        source,
        amount,
        type,
        reference,
        merchant,
        category,
        bank,
        app: appName,
        timestamp
    }

    insertTransaction(transaction)

    res.json({
        message: "Transaction stored",
        data: transaction
    })
})

/* GET ALL TRANSACTIONS */

app.get("/transactions/all", (req, res) => {

    const data = getTransactions()

    res.json(data)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
