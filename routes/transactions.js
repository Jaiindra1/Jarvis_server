const express = require("express")
const router = express.Router()

const db = require("../database")

app.post("/transactions/add", (req, res) => {

    const {
        source,
        amount,
        type,
        reference,
        merchant,
        category,
        bank,
        app,
        timestamp
    } = req.body

    insertTransaction({
        source,
        amount,
        type,
        reference,
        merchant,
        category,
        bank,
        app,
        timestamp
    })

    res.json({ message: "Transaction stored" })

})


router.get("/all", (req, res) => {

    db.all(`SELECT * FROM transactions ORDER BY created_at DESC`, [], (err, rows) => {

        if (err) {
            return res.status(500).json({ error: err.message })
        }

        res.json(rows)

    })

})


module.exports = router
