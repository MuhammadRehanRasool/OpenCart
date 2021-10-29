import {createContext} from "react";

const CartsContext = createContext({
  cart: [],
  setCart: () => {},
});

export default CartsContext;