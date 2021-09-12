const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/movie-db');

const Movie = mongoose.model('Movie', {
    id: Number,
    adult: Boolean,
    backdrop_path: String,
    genre_ids: Array,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number,
});


const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('q world'));

app.get(
    '/movies',
    (req, res) => Movie.find()
        .exec()
        .then(movies => res.json(movies))
);

app.post(
    '/movies/',
    (req, res) => Movie.create(req.body)
        .then(createdData => res.json(createdData))
);

app.put('/movies/:id',
    (req, res) => Movie.findOneAndUpdate(
        {
            id: req.params.id
        },
        req.body,
    )
        .exec()
        .then(movie => res.json(movie))
);

app.delete('/movies/:id',
    (req, res) => Movie.deleteOne(
        {
            id: req.params.id,
        }
    )
        .exec()
        .then(() => res.json({status: 'ok'}))
        .catch(() => res.json({status: 'error'}))
);

app.listen(port, () => console.log('Server is running on: http://localhost:5000'));