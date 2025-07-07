import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import type { CartItem } from "../../Interfaces/CartItem";
import CartDetails from "../Cart/CartDetails";
import BubbleAlert from "../Cart/BubbleAlert";

type CartProps = {
  cart: CartItem[];
  handleRemoveFromCart: (id: number) => void;
};

const Navbar: React.FC<CartProps> = ({ cart, handleRemoveFromCart }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [esCarroVisible, setEsCarroVisible] = useState(false);

  const toggleCart = () => {
    setEsCarroVisible((prev) => !prev);
  };

  const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
  const sidebarRef = useRef<HTMLUListElement>(null);

  const toggleMenuHandler = () => setToggleMenu((prev) => !prev);

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
            <a href="#products">Productos</a>
          </li>
          <li>
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#contact">Cuenta</a>
          </li>
        </ul>

        <div className={styles.actions}>
          <button className={styles.cartButton} onClick={toggleCart}>
            <CiShoppingCart size={24} className={styles.cartIcon} />

            <span className={styles.bubble}>
              {quantity > 0 && <BubbleAlert value={quantity} />}
            </span>
          </button>
          {esCarroVisible && (
            <CartDetails
              handleRemoveFromCart={handleRemoveFromCart}
              cart={cart}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
