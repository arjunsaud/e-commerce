class ProductService {
  Product;
  constructor(Product) {
    this.Product = Product;
  }

  async addProduct(data) {
    try {
      const newProduct = await new this.Product(data).save();
      const addedProduct = JSON.parse(JSON.stringify(newProduct));
      return addedProduct;
    } catch (err) {
      throw err;
    }
  }

  async getProducts(){
    try {
      const products=await this.Product.find()
      return products
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService;
