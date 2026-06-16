import "./Nav.scss";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav>
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
    </nav>
  );
};
export default Nav;
