const router = require('express').Router();
const authenticationGuard = require('../Middlewares/authenticationGuardMiddelware');
const { createCategory,
  updateCategory,
  getCategories,
  deleteCategory} = require('../Controllers/categoryController');

router.post(
  '/',
  authenticationGuard,
  createCategory
);

router.put(
  '/:id',
  authenticationGuard,
  updateCategory
);

router.get(
  '/',
  authenticationGuard,
  getCategories
);

router.delete(
  '/:id',
  authenticationGuard,
  deleteCategory
);

module.exports = router;