const movieRouter = require('express').Router()

const movieController = require('../controllers/movies-controller')

movieRouter.get('/', movieController.index)
movieRoutes.post('/', moviesController.create);

movieRoutes.get('/:id', moviesController.show);
movieRoutes.put('/:id', moviesController.update);
movieRoutes.delete('/:id', moviesController.delete);

module.exports = movieRouter