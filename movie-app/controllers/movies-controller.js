const Movie = require('../models/Movie')
const prettyLog = require('../logging/pretty-logs')

const MovieController = {
    index: (req, res, next) => {
        Movie.getAll()
            .then(movies => {
                prettyLog('Movie Controller -> index -> Movie.getAll() -> movies', movies)
                res.json({
                    message: 'ok',
                    data: { movies }
                })
            })
            .catch(next)
    }
}

module.exports = MovieController