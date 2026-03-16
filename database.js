const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./jarvis.db")

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            source TEXT,
            amount REAL,
            type TEXT,
            reference TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `)

})

module.exports = db