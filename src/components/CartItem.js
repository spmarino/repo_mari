import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ product, cantidad }) => {
  const { DelItem } = useContext(CartContext);
  const { nombre, precio, id } = product;
  return (
    <div>
      <h4>{nombre}</h4>
      <p>cantidad : {cantidad}</p>
      <button onClick={() => DelItem(id)}>borrar item</button>
    </div>
  );
};

export default CartItem;