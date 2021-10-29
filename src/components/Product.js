import { useContext } from "react";
import "./../style/Product.css";
import CartsContext from "../contexts/CartsContext";

function Product(props) {
  const { cart, setCart } = useContext(CartsContext);
  // Fetching cart value/setter from the context

  const addToCart = (id) => {
    setCart([...cart, id]);
  };
  // To add into cart

  const removeFromCart = (id) => {
    let cartCopy = cart;
    const index = cartCopy.indexOf(id);
    if (index > -1) {
      cartCopy.splice(index, 1);
    }
    setCart([...cartCopy]);
  };
  // To remove from cart

  return (
    <div className="__Product">
      <div className="imgBx">
        <img src={props.data.image} alt={props.data.title} />
      </div>
      <div className="contentBx">
        <h2>{props.data.title}</h2>
        <h4>{props.data.price}$</h4>
      </div>
      <div className="buttonBx">
        <button
          onClick={() => {
            cart.includes(props.data.id)
              ? removeFromCart(props.data.id)
              : addToCart(props.data.id);
          }}
        >
          {cart.includes(props.data.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
