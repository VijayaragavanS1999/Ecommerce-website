import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "grey", height: "3.5rem" }}>
      <Container style={{ display: "flex", justifyContent: "space-around" }}>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shopping-Cart
          </Link>
        </Navbar.Brand>
        <Form.Control
          type="search"
          placeholder="Search"
          style={{ width: "500px" }}
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart icon="square" color="white" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Empty</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
