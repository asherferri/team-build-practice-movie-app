const movieRouter = require('express').Router()

const movieController = require('../controllers/movies-controller')

movieRouter.get('/', movieController.index)
movieRouter.post('/', movieController.create);

movieRouter.get('/:id', movieController.show);
movieRouter.put('/:id', movieController.update);
movieRouter.delete('/:id', movieController.delete);

module.exports = movieRouter