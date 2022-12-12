const ProductService=require("./product.index")
const ProductController = {
  getproducts: async (req, res) => {
    const products=await ProductService.getProducts()
    res.json(products)
  },
  getproduct: async (req, res) => {
    res.json({
      message: "product",
    });
  },
  addproduct: async (req, res) => {
    const { user } = req;
    const data=req.body
    if(user.role!=="ADMIN"){
        return res.status(200).json({
            message:"Not Authorized"
        });
    }else{
        const addedProduct=await ProductService.addProduct(data)
        return res.status(200).json({
            addedProduct
        });
    }
  },
  editproduct: async (req, res) => {
    res.json({
      message: "product",
    });
  },
  deleteproduct: async (req, res) => {
    res.json({
      message: "product",
    });
  },
};

module.exports = ProductController;
