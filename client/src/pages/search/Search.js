import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { setInstance } from "../../config/axios";
import { GlobalContext } from "../../context/GlobalContext";

const Search = () => {
  const axios = setInstance();
  const [products, setProducts] = useState([]);
  const { search } = useContext(GlobalContext);

  useEffect(() => {
    if (search && search !== "") {
      fetchAllProducts(search);
    }
    const fetchAllProducts = async (query) => {
      const { data } = await axios(`/products/searchproducts?search=${query}`);
      console.log(data);
      setProducts(data.products);
    };
  }, [search]);

  return (
    <div className="category">
      <h4>Search Results</h4>
      <div className="product">
        <Row xs={1} sm={2} md={3} lg={4} xl={6} xxl={7} className="my-2">
          {products ? (
            products.map((value) => {
              return (
                <Col key={value._id}>
                  <Card xm={8}>
                    <Card.Img
                      variant="top"
                      src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>{value.productName}</h4>
                        <p>{value.productPrice}</p>
                      </Card.Title>
                      <Card.Text className="text-center">
                        <button className="buyadd">Buy</button>
                        <button className="buyadd">Add to Cart</button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <>No Result Match</>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Search;
