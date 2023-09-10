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
    <div className="block justify-between items-center	p-4 bg-gray-100 shadow-md  md:flex">
      <Link to="/" className="w-40 block">
        <img src={LOGO_URL} alt="logo" />
      </Link>
      <div className="list-items">
        <ul className="flex justify-center">
          <li className="pr-2 whitespace-nowrap">Online : {isOnline ? "🍏" : "🍎"}</li>
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
            <Link to="/Cart" className="whitespace-nowrap">Cart ({cartItems.length} : Items)</Link>
            </li>
          <li className="whitespace-nowrap">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
