const User = require("../models/UserModel");

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.json({
      success: true,
      token,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
}
module.exports = {
  login
}