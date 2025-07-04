import React from "react";
import styles from "./Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

type ContadorProps = {
  contador: number;
};

const Navbar: React.FC<ContadorProps> = ({ contador }) => {
  const getNumber = (n: number) => {
    if (!n) return "";
    return n > 9 ? "9+" : n;
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h1>CompraYa</h1>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">Account</a>
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.cartButton}>
            <CiShoppingCart size={24} color="#fff" />
            <span className={styles.bubble}>
              {contador !== 0 ? (
                <span className={styles.bubbleAlert}>
                  {getNumber(contador)}
                </span>
              ) : null}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
