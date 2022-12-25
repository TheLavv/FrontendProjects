module.exports = {
    port: process.env.PORT || 3001,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-db?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
}