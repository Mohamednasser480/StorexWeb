const Category = require("../Models/CategoryModel");

const createCategory = async (req,res)=> {
  try{
    const newCategory = new Category({title: req.body.title});
    await newCategory.save();
    res.json({
      success: true,
      data: newCategory
    });
  }catch (error){
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

const updateCategory = async(req, res)=>{
  try{
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title
      },
      {new: true}
    );
    res.json({
      success:true,
      data: category
    })
  }catch (error){
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

const getCategories = async(req,res)=>{
  try{
    const categories = await Category.find({});
    res.json({
      success:true,
      data:categories
    });
  }catch (error){
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

const deleteCategory = async(req,res)=>{
  try{
    await Category.findByIdAndDelete(req.params.id);
    res.send({success:true});
  }catch (error){
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}
module.exports = {
  createCategory,
  updateCategory,
  getCategories,
  deleteCategory
}