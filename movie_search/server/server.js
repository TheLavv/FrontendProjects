const mongoose = require('mongoose');
require('./app/models/movie')

const express = require('express');
const config = require('./config')
const app = express();
config.express(app);
config.routes(app);

const {port, mongoUri} = config.app;

mongoose.connect(mongoUri)
    .then(() => app.listen(
        port,
        () => console.log(`Server is running on: http://localhost:${port}`)
    ))
    .catch(() => console.log(`Error connecting to mongodb: ${mongoUri}`));