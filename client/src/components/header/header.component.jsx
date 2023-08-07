import { Link } from "react-router-dom";

import Button from "../button/button.component";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-1" draggable>
        <Link className="header__logo" to={"/"}>
          AcadeBooker
        </Link>
        <input className="header__search" type="search" />
        <div className="header__entry">
          <Link className="header__register" to={"/register"}>
            <Button>Register</Button>
          </Link>
          <Link className="header__login" to={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
