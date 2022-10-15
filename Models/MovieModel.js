const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, "title_is_required"],
    unique: [true, "category_is_already_exists"],
    trim: true,
    lowercase: true,
  },
  description:{
    type: String,
    trim: true,
    lowercase: true,
  },
  rate:{
    type: Number,
    min:[0, "the_minimum_value_is_0"],
    max:[5,"the_maximum_value_is_5"],
    default: null
  },
  image: {
      type: String,
      default: null
    },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    required:[true, "category_is_required"],
    ref:"category"
  }
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;