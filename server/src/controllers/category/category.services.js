class CategoryService {
  Category;
  constructor(Category) {
    this.Category = Category;
  }

  async addCategory(data) {
    try {
      const newCategory = await new this.Category(data).save()
      const addCategory = JSON.parse(JSON.stringify(newCategory));
      return addCategory;
    } catch (error) {
      throw error;
    }
  }

  async getCategory() {
    try {
      const category = await this.Category.find();
      return category;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const response = await this.Category.find({ _id: id.id });
      if (!response) {
        throw new Error("Error Occured");
      } else {
        const resp = await this.Category.deleteOne({ _id: id.id });
        return resp;
      }
    } catch (error) {
      throw error;
    }
  }
}


module.exports=CategoryService