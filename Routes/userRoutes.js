const router = require('express').Router();
const authenticationGuard = require('../Middlewares/authenticationGuardMiddelware');
const { createProfile, getUsers} = require('../controllers/userController');

router.post(
  '/',
  createProfile
);

router.get(
  '/',
  authenticationGuard,
  getUsers
);
module.exports = router;