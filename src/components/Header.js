import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

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
          <li className="pr-2">
            <Link to="SwiggyMart"> SwiggyMart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
