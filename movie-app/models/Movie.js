const db = require('../db/config')

class Movie {
    constructor({ id, title, description, genre, user_id }) {
        this.id = id || null
        this.title = title
        this.description = description
        this.genre = genre
        this.user_id =  user_id
    }

    static getAll() {
        return db.manyOrNone(
            'SELECT * FROM movies ORDER BY id DESC'
        )
        .then(movies => movies.map(movie => new this(movie)))
    }
}

module.exports = Movie