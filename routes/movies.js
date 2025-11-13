const Router = require('express').Router();

// import controller
const moviesController = require('../controllers/moviesController');

Router.get('/', moviesController.index);

Router.get('/:id', moviesController.show);

Router.post('/', moviesController.store)





module.exports = Router;