import React from "react";
import BubbleAlert from "./BubbleAlert";
import type { CartItem } from "../../Interfaces/CartItem";
import CartDetails from "./CartDetails";

interface CartProps {
  carro: CartItem[];
  esCarroVisible: boolean;
  mostrarCarro: () => void;
  handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({
  carro,
  esCarroVisible,
  mostrarCarro,
  handleRemoveFromCart,
}) => {
  const cantidad = carro.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div>
      <span>{cantidad > 0 && <BubbleAlert value={cantidad} />}</span>
      <button onClick={mostrarCarro}>
        <i className="fa-solid fa-cart-shopping" /> Shop
      </button>
      {esCarroVisible && (
        <CartDetails cart={carro} handleRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  );
};

export default Cart;
