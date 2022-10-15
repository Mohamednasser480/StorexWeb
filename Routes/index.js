const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes');
const movieRoutes = require('./movieRoutes');
const routesHandler = (app) => {
  app.use(
    `/api/users`,
    userRoutes
  );

  app.use(
    '/api/auth',
    authRoutes
  );

  app.use(
    '/api/categories',
    categoryRoutes
  );

  app.use(
    '/api/movies',
    movieRoutes
  );

};

module.exports = routesHandler;