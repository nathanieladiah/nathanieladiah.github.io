import { useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButton = () => {
    setMenuOpen((oldValue) => !oldValue);
  };

  return (
    <header>
      <div className="container">
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
