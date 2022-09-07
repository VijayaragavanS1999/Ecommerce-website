const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
    case "RemoveFromCart":
      return {
        ...state,
        Cart: state.Cart.filter((c) => c.Id !== action.payload.Id),
      };
    default:
      return state;
  }
};

export default CartReducer;
export const productReducer = (state, action) => {
  switch (action.type) {
    case "sortByPrice":
      return { ...state, sort: action.payload };
    case "filterByStock":
      return { ...state, byStock: !state.byStock };
    case "sortByDelivery":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "sortBySerach":
      return { ...state, searchQuery: action.payload };
    case "clearFilters":
      return { byStock: false, byFastDelivey: false, searchQuery: "" };

    default:
      return state;
  }
};
