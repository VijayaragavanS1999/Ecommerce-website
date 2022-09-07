import React from "react";
import Container from "react-bootstrap/Container";
import Avatar from "@mui/material/Avatar";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function Header() {
  const {
    state: { Cart },
    dispatch,
  } = CartState();
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

            <span>{Cart.length}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "40px" }}>
            {Cart.length > 0 ? (
              <div style={{ wordWrap: "break-word", marginLeft: "10px" }}>
                You have added {Cart.length} items to the cart
              </div>
            ) : (
              <div style={{ marginRight: "10px" }}>Cart is Empty!</div>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
