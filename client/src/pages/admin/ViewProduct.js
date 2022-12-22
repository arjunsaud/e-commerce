import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setInstance } from "../../config/axios";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";

const ViewProduct = () => {
  const { state } = useLocation();
  const axios = setInstance();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/getproduct/${state.id}`);
      setProduct(data.product);
      console.log(data);
    };

    fetchProduct();
  }, [state.id]);

  return (
    <div className="d-flex justify-content-center">
      <Card>
        <Card.Img
          variant="top"
          src="https://5.imimg.com/data5/JH/CC/IT/SELLER-2997346/bose-sound-link-around-ear-wireless-headphones-1000x1000.JPG"
        />
        <Card.Body>
          <Card.Title>{product[0].productName}</Card.Title>
          <Card.Text>Product Description</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : Rs</ListGroup.Item>
          <ListGroup.Item>Category</ListGroup.Item>
          <ListGroup.Item>Brand</ListGroup.Item>
          <ListGroup.Item>Model</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Title>Specification</Card.Title>
          <Card.Text>Product Specification</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card className="btn bg-danger my-2 text-white">Delete</Card>
          <Card className="btn bg-warning text-black">Another Link</Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewProduct;
