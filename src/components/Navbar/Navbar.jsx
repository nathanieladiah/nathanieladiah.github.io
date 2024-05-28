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
          <a href="#projects" className="navbar__link">
            Featured Projects
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__link">
            About me
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">
            Contact me
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-desktop"
            className="navbar__link navbar__link--cta"
          >
            View Resume
          </a>
          {/* <Button
            link={"#!"}
            variant={"icon"}
            icon={<MdOutlineBusinessCenter />}
          >
            View Resume
          </Button> */}
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Navbar;
