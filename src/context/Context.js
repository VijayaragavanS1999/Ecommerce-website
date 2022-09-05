import React, { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    Id: faker.datatype.uuid(),
    productName: faker.commerce.product(),
    price: faker.finance.amount(),
    image: faker.image.avatar(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    Cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
