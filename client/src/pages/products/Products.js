import React, { useEffect } from "react";
import { setInstance } from "../../config/axios";

const Products = () => {
  const axios = setInstance();
  useEffect(() => {
    const fetchProducts = async () => {
        const product=await axios.get("products/getproducts")
    };
    fetchProducts();
  });
  return <div>Products</div>;
};

export default Products;
