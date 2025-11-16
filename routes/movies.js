const Router = require('express').Router();

// import controller
const moviesController = require('../controllers/moviesController');
// import multer , NON FUNZIONA ESPORTANDOLO DALLA SUA MIDLEWARE?
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage });

Router.get('/', moviesController.index);

Router.get('/:id', moviesController.show);

Router.post('/', upload.single('image'), moviesController.store)





module.exports = Router;