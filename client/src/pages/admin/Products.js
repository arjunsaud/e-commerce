import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "../../components/assets/styles/product.css";
import { setInstance } from "../../config/axios";
const Products = () => {

  const axios = setInstance();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("products/getproducts");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


  const handleEdit=(id)=>{
    console.log(id);
  }
  const handleDelete=async(id)=>{
    const data=await axios.delete(`products/deleteproduct/${id}`) 
    fetchData()
    //deleted message
  }

  return (
    <div className="mt-4 mx-4">
      <Button>Add Product</Button>
      <h3 className="mt-4">Product Lists</h3>
      <hr />
      <Table border={1} className="text-center react-bootstrap-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Varient</th>
            <th>Brand</th>
            <th>Rating</th>
            <th>Model</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((value) => {
              return (
                <tr key={value._id}>
                  <td>{value.productName}</td>
                  <td>Category</td>
                  <td>{value.productPrice}</td>
                  <td>Varient</td>
                  <td>Brand</td>
                  <td>Rating</td>
                  <td>Model</td>
                  <td>
                    <Button variant="warning" onClick={()=>handleEdit(value._id)}>Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={()=>handleDelete(value._id)}>Delete</Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <>No Products</>
          )}
        </tbody>
      </Table>
      <hr />
    </div>
  );
};

export default Products;
