const { Router } = require('express');
const authRouter = require('../controllers/auth/auth.routes');
const productRouter = require('../controllers/products/product.routes');

const routes = require('express').Router()

routes.use("/auth", authRouter)
routes.use("/products",productRouter)

module.exports = routes;