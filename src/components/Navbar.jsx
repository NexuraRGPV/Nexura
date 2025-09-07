import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/NavLogo.png" alt="Nexura Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li><a href="/" className={styles.active}>Home</a></li>
        <li><a href="#team">Coordinators</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contactCont">Contact</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
