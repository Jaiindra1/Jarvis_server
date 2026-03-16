const Database = require("better-sqlite3")

const db = new Database("jarvis.db")

db.prepare(`
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT,
    amount REAL,
    type TEXT,
    reference TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`).run()

module.exports = db