
const CategoryController=require("./category.controller")

const {verifyUser}=require("./category.middleware")


const categoryRouter=require("express").Router()


categoryRouter.get("/getcategory",verifyUser,CategoryController.getCategory)
categoryRouter.post("/addcategory",verifyUser,CategoryController.addCategory)
categoryRouter.delete("/deletecategory/:id",verifyUser,CategoryController.deleteCategory)


module.exports=categoryRouter