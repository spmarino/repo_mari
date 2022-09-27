import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext);

  return (
    <>
    <div>
      {cartList.length < 1 ? (
        <p>Carrito vacio</p>
      ) : (
        cartList.map((product) => <CartItem key={product.item.id} product={product.item} cantidad ={product.cantidad}/>)
      )}
    </div>
    <button onClick={EmptyCart}> Borrar carrito</button>
    <p>El precio total de los productos es {PriceTotal()} </p>
    {IconCart() < 1? <p> </p>:<p>La cantidad total del carrito es {IconCart()}</p>}
    
    
    </>
  );
};

export default Cart;