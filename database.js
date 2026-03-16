const initSqlJs = require("sql.js")

let db

async function initDB() {

    const SQL = await initSqlJs()
    db = new SQL.Database()

    db.run(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            source TEXT,
            amount REAL,
            type TEXT,
            reference TEXT,
            merchant TEXT,
            category TEXT,
            bank TEXT,
            app TEXT,
            timestamp INTEGER
        )
    `)

}

function insertTransaction(tx) {

    db.run(
        `INSERT INTO transactions
        (source, amount, type, reference, merchant, category, bank, app, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            tx.source,
            tx.amount,
            tx.type,
            tx.reference,
            tx.merchant,
            tx.category,
            tx.bank,
            tx.app,
            tx.timestamp
        ]
    )

}

function getTransactions() {

    const result = db.exec("SELECT * FROM transactions ORDER BY timestamp DESC")

    if (result.length === 0) return []

    const columns = result[0].columns
    const values = result[0].values

    return values.map(row => {

        let obj = {}

        columns.forEach((col, i) => {
            obj[col] = row[i]
        })

        return obj
    })
}

module.exports = {
    initDB,
    insertTransaction,
    getTransactions
}
