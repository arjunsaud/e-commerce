const ProductController = require('./product.controller');
const { verifyUser } = require('./product.middleware');


const productRouter = require('express').Router()


productRouter.get('/getproducts', ProductController.getproducts)
productRouter.post('/addproduct', verifyUser,ProductController.addproduct)


productRouter.get('/getproduct/:id',verifyUser, ProductController.getproduct)

productRouter.put('/editproduct', verifyUser,ProductController.editproduct)
productRouter.delete('/deleteproduct/:id', verifyUser,ProductController.deleteproduct)


module.exports = productRouter;