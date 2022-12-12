import React from "react";
import "../../components/assets/styles/home.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="categorylist">
        <Category />
      </div>
    </>
  );
};

const Category = () => {
  return (
    <>
      <div className="category">
        <h4>Laptops</h4>
        <div className="product">
          <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
            <Col>
              <Card xm={8}>
                <Card.Img
                  variant="top"
                  src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <h4>Name</h4>
                    <p>Price</p>
                  </Card.Title>
                  <Card.Text>
                    <button>Buy</button>
                    <button>Add to Cart</button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://static-01.daraz.com.np/p/df22541cc0d040d7c9a23db6202fd7ba.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a</Card.Text>
                </Card.Body>
              </Card>
            </Col>
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
        <ImageSlider/>
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
