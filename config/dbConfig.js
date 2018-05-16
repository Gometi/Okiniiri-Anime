module.exports = process.env.DATABASE_URL || {
    host: 'localhost',
    port: 5432,
    database: 'anime_db'
}