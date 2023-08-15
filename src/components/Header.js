import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="headerMain">
      <Link to="/" className="LogoOuter">
        <img src={LOGO_URL} alt="logo" />
      </Link>
      <div className="list-items">
        <ul>
          <li>Online : {isOnline ? "🍏" : "🍎"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="SwiggyMart"> SwiggyMart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
