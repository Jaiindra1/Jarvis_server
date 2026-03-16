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

function insertTransaction(source, amount, type, reference) {
    db.run(
        "INSERT INTO transactions (source, amount, type, reference) VALUES (?, ?, ?, ?)",
        [source, amount, type, reference]
    )
}

function getTransactions() {
    const result = db.exec("SELECT * FROM transactions")
    return result
}

module.exports = {
    initDB,
    insertTransaction,
    getTransactions
}
