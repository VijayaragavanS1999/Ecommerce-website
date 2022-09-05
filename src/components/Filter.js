import React from "react";
import { Form } from "react-bootstrap";

const Filter = () => {
  return (
    <div className="home-left">
      <Form.Check inline label="Ascending" name="group1" />
      <Form.Check inline label="Descending" name="group1" />
      <Form.Check inline label="Fast Delivery only" name="group1" />
      <Form.Check inline label="Includes out of Stocks" name="group1" />
    </div>
  );
};

export default Filter;
