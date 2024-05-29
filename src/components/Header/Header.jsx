import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  const handleMenuButton = () => {
    setMenuOpen((oldValue) => !oldValue);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY <= scrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }

      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollPos]);

  return (
    <header>
      <div
        className={`container nav-wrapper ${!show ? "hidden" : ""} ${
          scrollPos > 30 ? "backdrop" : ""
        }`}
      >
        <div className="navbar__logo">
          Nathaniel<span className="accent">.</span>
        </div>
        <button
          className="mobile-nav-toggle"
          id="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={handleMenuButton}
        >
          <span className="sr-only">Menu</span>
        </button>
        <Navbar menuOpen={menuOpen} />
      </div>
      <Hero />
    </header>
  );
};
export default Header;
