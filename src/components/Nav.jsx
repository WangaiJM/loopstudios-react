import "./Nav.scss";
import logo from "../assets/logo.svg";
import hambuger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={isActive ? "active" : ""} id="mobile-menu">
      <img src={logo} alt="Logo" />
      <ul className="list-items">
        <li className="list-item">
          <a href="#!">About</a>
        </li>
        <li className="list-item">
          <a href="#!">Careers</a>
        </li>
        <li className="list-item">
          <a href="#!">Events</a>
        </li>
        <li className="list-item">
          <a href="#!">Products</a>
        </li>
        <li className="list-item">
          <a href="#!">Support</a>
        </li>
      </ul>
      <button
        className="nav-mobile"
        onClick={() => setIsActive((prev) => !prev)}
        aria-label={isActive ? "Close menu" : "Open menu"}
        aria-expanded={isActive}
        aria-controls="mobile-menu"
      >
        {isActive ? (
          <img src={close} alt="" aria-hidden="true" />
        ) : (
          <img src={hambuger} alt="" aria-hidden="true" />
        )}
      </button>
    </nav>
  );
};
export default Nav;
