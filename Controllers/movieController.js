const Movie = require("../Models/MovieModel");
const { uploadMedia , deleteMedia} = require("../utilities/media");

const createMovie = async (req,res)=> {
  try{

    const newMovie = new Movie({
      image: uploadMedia(req, 'image'),
      ...req.body
    });
    await newMovie.save();
    res.json({
      success: true,
      data: newMovie
    });
  }catch (error){
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id, {
        ...req.body,
        image: uploadMedia(req, 'image')
      },
      {new: true}
    );
    res.json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
}
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(movie && movie.image)
      await deleteMedia('movies', movie.image);
    res.json({success: true});
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
}

const getMovies = async(req,res)=>{
  try{
    const filterObj = {};
    // filter movies by the rate if it was given
    if(req.query.max_rate || req.query.min_rate) {
      const maxRate = req.query.max_rate || 5;
      const minRate = req.query.min_rate || 0;
      filterObj.rate = { $lte: maxRate, $gte: minRate };
    }
    if(req.query.title){
      filterObj.title = {"$regex": req.query.title,'$options':'im'};
    }
    let  movies = await Movie.find(filterObj).populate('category');
    if(req.query.category)
       movies =  movies.filter( movie => movie.category.title === req.query.category);

    res.json({
      success: true,
      data: movies
    });
  }catch (error){
    res.status(400).json({
      success:false,
      error: error.message
    })
  }
}
module.exports = {
  createMovie,
  updateMovie,
  getMovies,
  deleteMovie
}