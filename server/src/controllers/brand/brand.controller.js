const BrandService = require("./brand.index");

const BrandController = {
  getBrand: async (req, res) => {
    const brand = await BrandService.getBrand();
    res.status(200).json(brand);
  },

  addBrand: async (req, res) => {
    const { user } = req;
    const data=req.body
    if(user.role!=="ADMIN"){
        return res.status(200).json({
            message:"Not Authorized"
        });
    }else{
        const addedBrand=await BrandService.addBrand(data)
        return res.status(200).json({
          message:"Brand Saved",
          addedBrand
        });
    }

  },

  deleteBrand: async (req, res) => {
    const id = req.params;
    const brand = await BrandService.deleteBrand(id);
    return res.status(200).json({
      brand,
    });
  },
};

module.exports = BrandController;
