-- DEMO DATABASE: Schema SQL ibrido con frammenti NoSQL non normalizzati
CREATE TABLE enterprise_accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_code VARCHAR(100) NOT NULL,
    raw_nosql_blob TEXT
);

db.session_tokens.insert({
    "user_id": "usr_8821",
    "expires": ISODate("2026-12-31T23:59:59Z")
});
