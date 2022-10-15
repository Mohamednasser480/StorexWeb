const User = require("../models/UserModel");

const createProfile = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
}

const getUsers = async (req,res)=>{
  try{
    const users = await User.find({});
    res.json({
      success: true,
      data:users
    });
  }catch (error){
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
}

module.exports = {
  createProfile,
  getUsers
}