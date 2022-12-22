const Brand = require('../../model/brandModel');

const BrandService = require('./brand.services');

const brandService = new BrandService(Brand)

module.exports = brandService;