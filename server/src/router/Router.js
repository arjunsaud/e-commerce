const authRouter = require('../controllers/auth/auth.routes');
const productRouter = require('../controllers/products/product.routes');
const categoryRouter=require("../controllers/category/category.routes");
const brandRouter = require('../controllers/brand/brand.routes');
const userRouter = require('../controllers/users/users.routes');

const routes = require('express').Router()

routes.use("/auth", authRouter)
routes.use("/products",productRouter)
routes.use("/category",categoryRouter)

routes.use("/brand",brandRouter)

routes.use("/user",userRouter)

module.exports = routes;