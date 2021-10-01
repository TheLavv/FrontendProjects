module.exports = {
    port: process.env.port || 3001,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-db'
}