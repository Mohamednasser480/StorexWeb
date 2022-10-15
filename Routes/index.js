const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

const routesHandler = (app) => {
  app.use(
    `/api/users`,
    userRoutes
  );

  app.use(
    '/api/auth',
    authRoutes
  )
};

module.exports = routesHandler;