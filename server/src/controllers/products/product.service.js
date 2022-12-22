const path=require("path")
const fs=require('fs')

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

  async getProduct(id){
    try {
      const newproduct=await this.Product.find({_id:id})
      const  product= JSON.parse(JSON.stringify(newproduct));
      return product
    } catch (error) {
      throw error
    }
  }
  async deleteProduct(id){
    try {  
      const resp=await this.Product.find({_id:id.id})
      const file=resp[0].image
  
      if(file!==undefined || file!==""){
        const newproduct=await this.Product.deleteOne({_id:id.id})
        return newproduct
      }else{
        let imagepath=path.join(__dirname,'../../../uploads/')
        fs.unlinkSync(imagepath+file);
        const newproduct=await this.Product.deleteOne({_id:id.id})
        return newproduct
    }
    } catch (error) {
      throw error
    } 
  }

  async editProduct(data,id){
    try {
      const product=await this.Product.updateOne({_id:id.id},{data})
      return product
    } catch (error) {
      throw error
    }
  }


  async searchProducts(filters){
    try {
      const products=await this.Product.find({...filters})
      return products
    } catch (error) {
      throw error
    }
  }

}

module.exports = ProductService;
