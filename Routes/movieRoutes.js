const router = require('express').Router();
const authenticationGuard = require('../Middlewares/authenticationGuardMiddelware');
const multerMiddleware = require('../Middlewares/multerMiddleware');
const { createMovie,
        updateMovie,
        deleteMovie,
         getMovies
} = require('../Controllers/movieController');

router.post(
  '/',
  authenticationGuard,
  multerMiddleware('movies').fields([{ name: 'image', maxCount: 1 }]),
  createMovie
);

router.put(
  '/:id',
  authenticationGuard,
  multerMiddleware('movies').fields([
    {name: 'image', maxCount: 1}
  ]),
  updateMovie
);

router.get(
  '/',
  authenticationGuard,
  getMovies
);

router.delete(
  '/:id',
  authenticationGuard,
  deleteMovie
);

module.exports = router;