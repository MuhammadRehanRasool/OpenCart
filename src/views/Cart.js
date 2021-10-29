import { useContext, useState, useEffect } from "react";
import "./../style/Cart.css";
import CartsContext from "../contexts/CartsContext";
import axios from "axios";
import Product from "../components/Product";

function Cart() {
  const { cart, setCart } = useContext(CartsContext);
  // Fetching cart value/setter from the context

  const [products, setProducts] = useState([]);
  // State for products

  const fetchProducts = () => {
    // let oldUrl =
    //   "https://api.codetabs.com/v1/proxy?quest=https://canacitycannabis.ca/wp-json/wc/v3/products?per_page=20&consumer_key=ck_2478a5170f75f45dcf9514126067be2dab2b1b94&consumer_secret=cs_023ef065e096a004f1334c289f8498863142a356";
    let url = "https://fakestoreapi.com/products";
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  };
  // Function to fetch products from API

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="__Cart">
      <h1>Your Cart</h1>
      <div className="productContainer">
        {products.length === 0
          ? "Loading..."
          : cart.map((item, index) => {
              products
                .filter((product) => product.id === item)
                .map((data) => {
                  return <Product key={index} data={data} />;
                });
            })}
      </div>
    </div>
  );
}

export default Cart;
