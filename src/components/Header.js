import {LOGO_URL} from '../utils/constant'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div className="headerMain">
        <div className="LogoOuter">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="list-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header