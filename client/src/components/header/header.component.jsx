import { Link } from "react-router-dom";

import Button from "../button/button.component";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header__container-1">
        <Link className="header__logo" to={"/"}>
          AcadeBooker
        </Link>
        <input
          className="header__search"
          placeholder="search for a course"
          type="search"
        />
        <div className="header__entry">
          <Link className="header__register" to={"/register"}>
            <Button>Register</Button>
          </Link>
          <Link className="header__login" to={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div> */}

      <div className="header__container-2" draggable>
        <Link className="header__logo" to={"/"}>
          AcadeBooker
        </Link>

        <div className="header__entry">
          <Link className="header__services" to={"/services"}>
            Services
          </Link>
          <Link className="header__history" to={"/history"}>
            Booking history
          </Link>
        </div>
        <Link className="header__logout" to={"/"}>
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
