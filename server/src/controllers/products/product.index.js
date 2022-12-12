const Product = require('../../model/productModel');

const ProductService = require('./product.service');

const productService = new ProductService(Product)

module.exports = productService;