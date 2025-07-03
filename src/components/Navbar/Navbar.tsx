import React from "react";
import styles from "./Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>CompraYa</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.cartButton}>
            <CiShoppingCart size={24} color="#fff" />
            (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
