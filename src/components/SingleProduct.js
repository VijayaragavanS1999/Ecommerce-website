import React from "react";
import { Button, Card } from "react-bootstrap";
import "./style.css";
import { CartState } from "../context/Context";
const SingleProduct = ({ prod }) => {
  const {
    state: { Cart },
    dispatch,
  } = CartState();

  return (
    <Card style={{ width: "300px", margin: "10px" }}>
      <Card.Img className="card-img" variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title style={{ margin: "0" }}>{prod.productName}</Card.Title>
        <Card.Text style={{ margin: "0" }}>${Math.round(prod.price)}</Card.Text>
        <Card.Text>
          {prod.inStock < 5 ? (
            <span>Fast Delivery</span>
          ) : (
            <span>More than {prod.inStock} days</span>
          )}
        </Card.Text>
        {Cart.some((p) => p.Id === prod.Id) ? (
          <Button
            onClick={() => {
              dispatch({
                type: "RemoveFromCart",
                payload: prod,
              });
            }}
            style={{ marginRight: "2px" }}
            variant="danger"
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "AddToCart",
                payload: prod,
              });
            }}
            disabled={!prod.inStock}
          >
            {!prod.inStock ? "Out of stock" : "Add to cart"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
