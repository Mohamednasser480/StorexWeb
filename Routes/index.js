const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes');
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

};

module.exports = routesHandler;