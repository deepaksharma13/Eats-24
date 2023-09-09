import { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // subscribing to the store using selector
  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className="flex justify-between items-center	p-4 bg-gray-100 shadow-md	">
      <Link to="/" className="w-40">
        <img src={LOGO_URL} alt="logo" />
      </Link>
      <div className="list-items">
        <ul className="flex">
          <li className="pr-2">Online : {isOnline ? "🍏" : "🍎"}</li>
          <li className="pr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-2">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pr-2 ">
            <Link to="SwiggyMart"> SwiggyMart</Link>
          </li>
          <li className="pr-2 font-bold text-md">
            <Link to="/Cart">Cart ({cartItems.length} : Items)</Link>
            </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
