import React, { useState } from "react";
import styles from "./SiteNav.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "GitHub", url: "https://github.com/sfbennett" },
    { label: "Projects", url: "/projects" },
  ];
  return (
    <div className={styles.wrapper}>
      {/* Desktop menu */}
      <nav className={`${styles.links} ${isOpen ? styles.showMenu : ""}`}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
            onClick={() => setIsOpen(false)}
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger menu for mobile */}
      <div className={styles.hamburgercontainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
          <span className={styles.menuText}>Menu</span>
        </div>
        {isOpen && (
          <nav className={styles.mobileLinks}>
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.url}
                to={navLink.url}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {navLink.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

export default SiteNav;
