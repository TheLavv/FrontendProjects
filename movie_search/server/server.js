const mongoose = require('mongoose');
require('./app/models/movie')

const express = require('express');
const config = require('./config')
const app = express();
config.express(app);
config.routes(app);

const {port, mongoUri} = config.app;

try {
    mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        app.listen(
            port,
            () => console.log(`Server is running on: http://localhost:${port}`)
        )
    })
}
catch (error) {
    console.log(`Error connecting to mongodb: ${mongoUri}`);
}