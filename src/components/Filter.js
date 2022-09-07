import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import { FiFilter } from "react-icons/fi";
import { CartState } from "../context/Context";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort, searchQuery },
    productDispatch,
  } = CartState();

  return (
    <div className="home-left">
      <h1>
        <FiFilter class="filter-icon" icon="square" color="white" />
        Filter products by
      </h1>
      <Form.Check className="filters" inline label="Ascending" name="group1" />
      <Form.Check className="filters" inline label="Descending" name="group1" />
      <Form.Check
        className="filters"
        inline
        label="Fast Delivery only"
        name="group1"
      />
      <Form.Check
        className="filters"
        inline
        label="Out of Stocks"
        name="group1"
      />
      <Button className="filter-btn" variant="primary" size="lg">
        Clear Filter
      </Button>
    </div>
  );
};

export default Filter;
