const ProductService=require("./product.index")
const ProductController = {
  getproducts: async (req, res) => {
    const products=await ProductService.getProducts()
    res.json(products)
  },
  getproduct: async (req, res) => {
    const id=req.params.id
    const product=await ProductService.getProduct(id)
    return res.status(200).json({
      product      
    })

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
          message:"Product Saved",
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
    const id=req.params
    const product=await ProductService.deleteProduct(id)
    return res.status(200).json({
      product      
    })
  },

  searchProducts:async(req,res)=>{
    const {search}=req.query
    let filters=search
    filters = filters && filters !== '' ? {productName :{$regex : filters, $options: "$i"}}  : {}
    const products=await ProductService.searchProducts(filters)
    return res.status(200).json({
      products
    })
  }
};

module.exports = ProductController;
