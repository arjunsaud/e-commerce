import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/navbar.css";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const MyNav = () => {
  return (
    <div className="header">
      <Navbar className="mx-4" expand="lg">
          <Navbar.Brand to="/" className="sitename">
            E-COMMERCE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Link className="link" style={{fontSize:"18px"}} to="/">
                <FontAwesomeIcon className="mx-2" size="4" icon={faUser} />
                Profile
              </Link>
              <Link className="link text-danger" style={{fontSize:"18px"}} to="/">
                <FontAwesomeIcon
                  className="mx-2"
                  size="4"
                  color="red"
                  icon={faRightFromBracket}
                />
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
