const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name_is_required"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password_is_required"],
    minLength: [6, "min_length_6"],
  },
  email: {
    type: String,
    required: [true, "email_is_required"],
    lowercase: true,
    trim: true,
    unique: [true, "email_is_already_exists"],
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
    birthday:{
      type: mongoose.Schema.Types.Date
    }
  },

}, { timestamps: true });

UserSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.reset_password_code;
  delete userObject.status;
  delete userObject.type;
  delete userObject.group;
  return userObject;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw "login_failed";
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw "login_failed";
  return user;
};

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, type: this.type },
    process.env.JWT_SEC
  );
  return token;
};

// Hash the plain text password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;