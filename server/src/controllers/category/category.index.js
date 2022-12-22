const Category=require("../../model/categoryModel")

const CategoryService = require('./category.services');

const categoryService = new CategoryService(Category)

module.exports = categoryService;