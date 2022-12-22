const CategoryService = require("./category.index");

const CategoryController = {
  getCategory: async (req, res) => {
    const category = await CategoryService.getCategory();
    res.status(200).json(category);
  },

  addCategory: async (req, res) => {
    const { user } = req;
    const data=req.body
    if(user.role!=="ADMIN"){
        return res.status(200).json({
            message:"Not Authorized"
        });
    }else{
        const addedCategory=await CategoryService.addCategory(data)
        return res.status(200).json({
          message:"Category Saved",
          addedCategory
        });
    }

  },

  deleteCategory: async (req, res) => {
    const id = req.params;
    const category = await CategoryService.deleteCategory(id);
    return res.status(200).json({
      category,
    });
  },
};

module.exports = CategoryController;
