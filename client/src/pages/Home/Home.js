import React, { useEffect, useState } from "react";
import "../../components/assets/styles/home.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { setInstance } from "../../config/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Slices/cartSlices";

const Home = () => {
  const axios = setInstance();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("products/getproducts");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
      <div className="categorylist">
        <Category products={products} />
      </div>
    </>
  );
};

const Category = ({ products }) => {
  const dispatch=useDispatch()

  const handleAddToCart=(id)=>{
    const item= products.filter((value)=>{
      if(id===value._id){
        return true
      }
    })
    const cartItem={
      id:item[0]._id,
      name:item[0].productName,
      price:item[0].productPrice,
      qty:1
    }
    dispatch(addToCart(cartItem))
  }
  return (
    <>
      <div className="category">
        <h4>Laptops</h4>
        <div className="product">
          <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
            {products ? (
              products.map((value) => {
                return(
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
                        <button className="buyadd" onClick={()=>handleAddToCart(value._id)}>Add to Cart</button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>)
              })
            ) : (
              <>
              No Products</>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <HeroBrands />
        <ImageSlider />
      </div>
    </>
  );
};

const HeroBrands = () => {
  return (
    <>
      <div className="categoryaisde">
        <h3>Shop By Brand</h3>
        <div>
          <Link className="brands" to="/">
            Apple
          </Link>
          <Link className="brands" to="/">
            Apple
          </Link>
          <Link className="brands" to="/">
            Apple
          </Link>
          <Link className="brands" to="/">
            Apple
          </Link>
          <Link className="brands" to="/">
            Apple
          </Link>
          <Link className="brands" to="/">
            Apple
          </Link>
        </div>
      </div>
    </>
  );
};

const ImageSlider = () => {
  return (
    <>
      <div className="imagelider">
        <Carousel>
          <Carousel.Item>
            <img
              height="500px"
              width="100%"
              className="d-block"
              src="https://www.gizmochina.com/wp-content/uploads/2018/06/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy8zNTg3L2cvbWljcm9zb2Z0LXN1cmZhY2UtcHJvLTAwMDJfNzc1eDUwMHB4LmpwZw-600x500.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
