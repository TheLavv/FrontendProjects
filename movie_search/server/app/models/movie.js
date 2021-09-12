const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
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
})

const Movie = mongoose.model('Movie', MovieSchema);
