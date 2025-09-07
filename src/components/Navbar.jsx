import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/NavLogo.png" alt="Nexura Logo" />
      </div>

      {/* Nav Links */}
      <ul className={styles.navLinks}>
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
