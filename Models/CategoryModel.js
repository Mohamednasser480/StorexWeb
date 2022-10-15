const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title_is_required"],
    unique: [true, "category_is_already_exists"],
    trim: true,
    lowercase: true,
  },

});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;