import {LOGO_URL} from '../utils/constant'

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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header