import { Link, useLocation, useNavigate } from "react-router-dom";

import Button from "../button/button.component";

const Header = () => {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("You have logged out successfully");
  };
  return (
    <header className="header">
      {pathName === "/" || pathName === "/register" || pathName === "/login" ? (
        <div className="header__container-1">
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
        </div>
      ) : (
        <div className="header__container-2" draggable>
          <Link className="header__logo" to={"/"}>
            AcadeBooker
          </Link>

          <div className="header__entry">
            <Link
              className="header__nav-link header__profile"
              to={"/user-dashboard"}
            >
              Profile
            </Link>
            <Link
              className="header__nav-link header__services"
              to={"/services"}
            >
              Services
            </Link>
            <Link className="header__nav-link header__history" to={"/history"}>
              Booking history
            </Link>
          </div>
          <button className="header__logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
