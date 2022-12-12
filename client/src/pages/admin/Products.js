import React from "react";
import { Button, Table } from "react-bootstrap";
import "../../components/assets/styles/product.css";
const Products = () => {
  return (
    <div className="mt-4 mx-4">
      <Button>Add Product</Button>
      <h3 className="mt-4">Product Lists</h3>
      <hr/>
      <Table border={1} className="text-center react-bootstrap-table">
        <thead>
          <tr>
            <th>ID</th>
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
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Varient</td>
            <td>Brand</td>
            <td>Rating</td>
            <td>Model</td>
            <td><Button variant="warning">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Varient</td>
            <td>Brand</td>
            <td>Rating</td>
            <td>Model</td>
            <td><Button variant="warning">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
        </tbody>
      </Table>
      <hr/>
    </div>
  );
};

export default Products;
