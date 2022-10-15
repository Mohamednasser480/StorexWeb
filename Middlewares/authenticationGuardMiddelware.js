const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authenticationGuard = async (req, res, next) => {
  try {
    let token = req.header('Authorization');
    if (!token)
      throw 'access_denied';
    token = token.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    const user = await User.findById(decoded._id);
    if (!user)
      throw 'authentication_error';
    req.user = user;
    next();
  }
  catch (error) {
    res.status(401).json(error.message);
  }
}
module.exports = authenticationGuard;