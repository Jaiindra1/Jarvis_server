const express = require("express")
const router = express.Router()

const db = require("../database")

/* ADD TRANSACTION */

router.post("/add", (req, res) => {

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

    const query = `
        INSERT INTO transactions
        (source, amount, type, reference, merchant, category, bank, app, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    db.run(
        query,
        [source, amount, type, reference, merchant, category, bank, app, timestamp],
        function(err) {

            if (err) {
                return res.status(500).json({ error: err.message })
            }

            res.json({
                message: "Transaction stored",
                id: this.lastID
            })

        }
    )
})

/* GET ALL TRANSACTIONS */

router.get("/all", (req, res) => {

    db.all(
        `SELECT * FROM transactions ORDER BY timestamp DESC`,
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({ error: err.message })
            }

            res.json(rows)

        }
    )
})

module.exports = router
