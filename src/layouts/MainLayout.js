import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./../style/MainLayout.css";
import CartsContext from "../contexts/CartsContext";

const Spacer = () => {
  return <span className="spacer"></span>;
};

const MainLayout = (props) => {
  const [cart, setCart] = useState([]);
  // State to store user cart

  const value = { cart, setCart };
  // Preparing value to provide to context so that other components can use it

  return (
    <CartsContext.Provider value={value}>
      <div className="_MainLayout">
        <Navbar />
        <Spacer />
        {props.children}
      </div>
    </CartsContext.Provider>
  );
};

export default MainLayout;
