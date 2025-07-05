import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

type ContadorProps = {
  contador: number;
};

const Navbar: React.FC<ContadorProps> = ({ contador }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sidebarRef = useRef<HTMLUListElement>(null);

  const toggleMenuHandler = () => setToggleMenu((prev) => !prev);

  const getNumber = (n: number) => {
    if (!n) return "";
    return n > 9 ? "9+" : n;
  };

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (toggleMenu && !sidebarRef.current?.contains(e.target as Node)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [toggleMenu]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <button className={styles.toggleButton} onClick={toggleMenuHandler}>
          {toggleMenu ? "" : "≡"}
        </button>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h1>CompraYa</h1>
          </Link>
        </div>
        <ul
          ref={sidebarRef}
          className={`${styles.navLinks} ${toggleMenu ? styles.open : ""}`}
        >
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
            <CiShoppingCart size={24} className={styles.cartIcon} />
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
