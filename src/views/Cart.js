import {useContext} from "react";
import "./../style/Cart.css";
import CartsContext from "../contexts/CartsContext";

function Cart() {
  const { cart, setCart } = useContext(CartsContext);
  // Fetching cart value/setter from the context
  return <div className="__Cart">
    <h1>Your Cart</h1>
    
  </div>;
}

export default Cart;
