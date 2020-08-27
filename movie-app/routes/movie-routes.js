const movieRouter = require('express').Router()

const movieController = require('../controllers/movies-controller')

movieRouter.get('/', movieController.index)

module.exports = movieRouter