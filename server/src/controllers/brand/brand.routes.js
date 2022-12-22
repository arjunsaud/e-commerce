const BrandController = require("./brand.controller");

const { verifyUser } = require("./brand.middleware");

const brandRouter = require("express").Router();

brandRouter.get("/getbrand", verifyUser, BrandController.getBrand);
brandRouter.post("/addbrand", verifyUser, BrandController.addBrand);
brandRouter.delete("/deletebrand/:id", verifyUser, BrandController.deleteBrand);

module.exports = brandRouter;
