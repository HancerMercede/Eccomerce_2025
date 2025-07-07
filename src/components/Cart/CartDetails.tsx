import React from "react";
import styles from "./CartDetails.module.css";
import type { CartItem } from "../../Interfaces/CartItem";

interface CartDetailsProps {
  cart: CartItem[];
}

const CartDetails: React.FC<CartDetailsProps> = ({ cart }) => {
  console.log(cart);
  return (
    <div className={styles.cartDetails}>
      <ul className={styles.list}>
        {cart.map((product) => (
          <li className={styles.item} key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <div className={styles.info}>
              <span className={styles.name}>{product.name}</span>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
              <span className={styles.quantity}>x{product.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetails;
