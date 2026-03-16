const express = require("express")
const router = express.Router()

const db = require("../database")
const parseTransaction = require("./transactionParser")
const detectMerchant = require("./merchantEngine")

app.post("/transactions/add", (req, res) => {

  const { message, source } = req.body

  const parsed = parseTransaction(message)

  const merchantData = detectMerchant(message)

  const transaction = {

    source,
    amount: parsed.amount,
    type: parsed.type,
    reference: parsed.reference,
    merchant: merchantData.merchant,
    category: merchantData.category,
    bank: "BOB",
    app: "UPI",
    timestamp: Date.now()

  }

  insertTransaction(transaction)

  res.json(transaction)

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
