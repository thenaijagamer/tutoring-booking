import { Link } from "react-router-dom";

import Button from "../button/button.component";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container" draggable>
        <Link className="header__logo" to={"/"}>
          AcadeBooker
        </Link>
        <input className="header__search" type="search" />
        <div className="header__entry">
          <Button className>
            <Link className="header__register" to={"/register"}>
              Register
            </Link>
          </Button>
          <Button style={`ml-button`}>
            <Link className="header__login" to={"/login"}>
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
