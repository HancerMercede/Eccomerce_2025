import React from "react";
import styles from "./CartDetails.module.css";
import type { CartItem } from "../../Interfaces/CartItem";

interface CartDetailsProps {
  cart: CartItem[];
  handleRemoveFromCart: (productId: number) => void;
}

const CartDetails: React.FC<CartDetailsProps> = ({
  cart,
  handleRemoveFromCart,
}) => {
  return (
    <div className={styles.cartDetails}>
      {cart.length !== 0 ? (
        <>
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
                  <span className={styles.price}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className={styles.quantity}>x{product.quantity}</span>
                </div>
                <div>
                  <button
                    className={styles.remove}
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.checkoutContainer}>
            <button className={styles.checkout}>Checkout</button>
          </div>
        </>
      ) : (
        <p> 🫤Cart is empty</p>
      )}
    </div>
  );
};

export default CartDetails;
