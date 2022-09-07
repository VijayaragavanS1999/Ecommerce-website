import React, { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import CartReducer, { productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(21)].map(() => ({
    Id: faker.datatype.uuid(),
    productName: faker.commerce.product(),
    price: faker.finance.amount(),
    image: faker.image.avatar(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  }));
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    Cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivey: false,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
