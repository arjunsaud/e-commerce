const upload = require('../../utils/upload');
const ProductController = require('./product.controller');
const { verifyUser } = require('./product.middleware');


const productRouter = require('express').Router()


productRouter.get('/getproducts',ProductController.getproducts)
productRouter.get('/getproduct/:id', ProductController.getproduct)

productRouter.get("/searchproducts",ProductController.searchProducts)

productRouter.post('/addproduct',verifyUser,upload,ProductController.addproduct)
productRouter.put('/editproduct', verifyUser,ProductController.editproduct)
productRouter.delete('/deleteproduct/:id', verifyUser,ProductController.deleteproduct)


module.exports = productRouter;