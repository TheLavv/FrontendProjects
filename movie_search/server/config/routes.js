const movies = require('../app/controlers/movies');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('q world'));
    app.get('/movies/:search', movies.getAll);
    app.post('/movies/', movies.create);
    app.put('/movies/:id', movies.update);
    app.delete('/movies/:title', movies.remove);
}