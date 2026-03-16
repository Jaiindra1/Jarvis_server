const express = require("express")
const router = express.Router()

const db = require("../database")

router.post("/add", (req, res) => {

    const { source, amount, type, reference } = req.body

    const query = `
        INSERT INTO transactions(source, amount, type, reference)
        VALUES (?, ?, ?, ?)
    `

    db.run(query, [source, amount, type, reference], function(err) {

        if (err) {
            return res.status(500).json({ error: err.message })
        }

        res.json({
            message: "Transaction stored",
            id: this.lastID
        })

    })

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