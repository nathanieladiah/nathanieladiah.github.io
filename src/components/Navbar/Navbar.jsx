import PropTypes from "prop-types";
import "./navbar.scss";
const Navbar = ({ menuOpen }) => {
  return (
    <nav className="navbar">
      <ul
        id="primary-navigation"
        className="navbar__nav"
        data-visible={menuOpen ? "true" : "false"}
      >
        <li className="navbar__item">
          <a href="#" className="navbar__link navbar__link--active">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Featured Projects
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            About me
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Contact me
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#"
            id="cta-desktop"
            className="navbar__link navbar__link--cta"
          >
            View Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Navbar;
