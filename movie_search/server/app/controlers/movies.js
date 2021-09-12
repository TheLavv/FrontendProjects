const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

const getAll = (req, res) => {
    Movie.find()
        .exec()
        .then(movies => res.json(movies))
        .catch(error => res.status(500).json(error));
}

const create = (req, res) => {
    Movie.create(req.body)
        .then(created => res.json(created))
        .catch(error => res.status(500).json(error));
}

const update = (req, res) => {
    Movie.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(movie => res.json(movie))
        .catch(error => res.status(500).json(error));
}

const remove = (req, res) => {
    Movie.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({success: true}))
        .catch(error => res.status(500).json(error));
}

module.exports = {
    getAll,
    create,
    update,
    remove
}